import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';
import TemperatureChart from '../components/TemperatureChart';
import useWeatherData from '../hooks/useWeatherData';

const HomePage = () => {
  const [city, setCity] = useState('');
  const forecastData = useWeatherData(city);

  return (
    <div>
      <h3>Search for the weather</h3>
      <SearchBar onCitySelect={setCity} />
      {city && (
        <>
          <CurrentWeather city={city} />
          <Forecast city={city} />
          <TemperatureChart data={forecastData} />
        </>
      )}
    </div>
  );
};

export default HomePage;
