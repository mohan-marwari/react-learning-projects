import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';
import { fetchForecast } from '../services/weatherService';
import TemperatureChart from '../components/TemperatureChart';

const HomePage = () => {
  const [city, setCity] = useState('');
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const getForecast = async () => {
      if (city) {
        try {
          const data = await fetchForecast(city);
          console.log('API Response:', data); // Debugging line
  
          // Check if data and data.list exist before mapping
          if (data && data.list && Array.isArray(data.list) && data.list.length > 0) {
            const temperatureData = data.list.map((day) => ({
              day: `Day ${new Date(day.dt * 1000).toLocaleDateString()}`,
              temp: day.temp.day,
            }));
            setForecastData(temperatureData);
          } else {
            console.error("Forecast data is not in the expected format or empty.");
          }
        } catch (error) {
          console.error('Error fetching forecast:', error);
        }
      }
    };
  
    getForecast();
  }, [city]);
  
  

  return (
    <div>
      <h3>Search for the weather</h3>
      <SearchBar onCitySelect={setCity} />
      {city && (
        <>
          <CurrentWeather city={city} />
          <Forecast city={city} />
          {/* Display the temperature chart */}
          <TemperatureChart data={forecastData} />
        </>
      )}
    </div>
  );
};

export default HomePage;
