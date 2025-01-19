import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import axios from 'axios';
// import { API_KEY } from '../services/weatherService';

const SearchBar = ({ onCitySelect }) => {
  const [options, setOptions] = useState([]);

  const handleSearch = async (event) => {
    const query = event.target.value;
    if (query.length > 2) {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/find`, {
        params: {
          q: query,
          appid: 'a74cc6fb4d05dfbea3b67acfd1d07cdc',
        },
      });
      const cities = response.data.list.map((city) => city.name);
      setOptions([...new Set(cities)]);  // Remove duplicate cities
    }
  };

  return (
    <Autocomplete
      freeSolo
      options={options}
      onChange={(event, value) => onCitySelect(value)}
      renderInput={(params) => (
        <TextField {...params} label="Search City" onChange={handleSearch} fullWidth />
      )}
    />
  );
};

export default SearchBar;