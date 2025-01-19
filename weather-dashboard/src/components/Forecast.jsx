import React, { useEffect, useState } from 'react';
import { Grid2, Card, CardContent, Typography } from '@mui/material';
import { fetchForecast } from '../services/weatherService';

const Forecast = ({ city }) => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchForecast(city);
        // Filter data for a single forecast per day (12:00 PM)
        const dailyForecasts = data.list.filter((entry) =>
          entry.dt_txt.includes('12:00:00')
        );
        setForecast(dailyForecasts);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };
    if (city) {
      fetchData();
    }
  }, [city]);

  return (
    <Grid2 container spacing={2}>
      {forecast.map((day, index) => (
        <Grid2 xs={12} sm={6} md={4} lg={2} key={index}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6">Day {new Date(day.dt_txt).toDateString()}</Typography>
              <Typography variant="subtitle1">Temp: {day.main.temp} °C</Typography>
              <Typography variant="body2"> Condition: {day.weather[0].description}</Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Forecast;
