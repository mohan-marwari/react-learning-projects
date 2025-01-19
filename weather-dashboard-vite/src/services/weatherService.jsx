import axios from 'axios';

const API_KEY = 'a74cc6fb4d05dfbea3b67acfd1d07cdc';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};

// export const fetchForecast = async (city) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/forecast/daily`, {
//       params: {
//         q: city,
//         cnt: 7,
//         units: 'metric',
//         appid: API_KEY,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching forecast:', error);
//     throw error;
//   }
// };

/**
 * Fetch 5-day forecast data for a specific city.
 * @param {string} city - The name of the city.
 * @returns {Promise<Object>} - The forecast data for the city.
 */
export const fetchForecast = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        units: 'metric', 
        appid: API_KEY, 
      },
    });
    return response.data; 
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};