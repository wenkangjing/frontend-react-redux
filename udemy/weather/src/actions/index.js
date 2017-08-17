import axios from 'axios';

const API_KEY = "03338a3a3e4d248248475dcc9a3cb40c";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},au`;
  const request = axios.get(url);

  // attach the promise to payload property of the action
  // so that redux promise will take care of it 
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}