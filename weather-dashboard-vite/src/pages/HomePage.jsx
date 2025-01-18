import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';

const HomePage = () => {
  const [city, setCity] = useState('');

  return (
    <div>
      <SearchBar onCitySelect={setCity} />
      {city && (
        <>
          <CurrentWeather city={city} />
          <Forecast city={city} />
        </>
      )}
    </div>
  );
};

export default HomePage;