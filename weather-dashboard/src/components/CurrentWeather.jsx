import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { fetchCurrentWeather } from '../services/weatherService';

const CurrentWeather = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCurrentWeather(city);
        setWeather(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [city]);

  return weather ? (
    <Card>
      <CardContent>
        <Typography variant="h5">{weather.name}</Typography>
        <Typography>Temperature: {weather.main.temp} °C</Typography>
        <Typography>Humidity: {weather.main.humidity}%</Typography>
        <Typography>Wind Speed: {weather.wind.speed} m/s</Typography>
      </CardContent>
    </Card>
  ) : (
    <Typography>Loading...</Typography>
  );
};

export default CurrentWeather;