import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { fetchForecast } from '../services/weatherService';

const Forecast = ({ city }) => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchForecast(city);
        setForecast(data.list);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [city]);

  return (
    <Grid container spacing={2}>
      {forecast.map((day, index) => (
        <Grid item xs={12} sm={4} md={2} key={index}>
          <Card>
            <CardContent>
              <Typography>Day {index + 1}</Typography>
              <Typography>Temp: {day.temp.day} °C</Typography>
              <Typography>Condition: {day.weather[0].description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Forecast;