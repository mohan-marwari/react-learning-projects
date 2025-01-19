import { useState, useEffect } from 'react';
import { fetchForecast } from '../services/weatherService';

const useWeatherData = (city) => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const getForecast = async () => {
      if (city) {
        try {
          const data = await fetchForecast(city);

          // Validate the structure of data before processing
          if (data?.list && Array.isArray(data.list) && data.list.length > 0) {
            const temperatureData = data.list.map((day) => ({
              day: `Day ${new Date(day.dt * 1000).toLocaleDateString()}`,
              temp: day.main.temp,
            }));
            setForecastData(temperatureData);
          }
        } catch (error) {
          // Handle errors silently, can log to an error tracking service if needed
          console.error('Error fetching forecast:', error);
        }
      }
    };

    getForecast();
  }, [city]);

  return forecastData;
};

export default useWeatherData;
