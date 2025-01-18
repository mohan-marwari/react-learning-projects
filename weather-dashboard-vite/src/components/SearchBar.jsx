import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import axios from 'axios';

const SearchBar = ({ onCitySelect }) => {
  const [options, setOptions] = useState([]);

  const handleSearch = async (event) => {
    const query = event.target.value;
    if (query.length > 2) {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/find`, {
        params: {
          q: query,
          appid: 'YOUR_API_KEY',
        },
      });
      setOptions(response.data.list.map((city) => city.name));
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