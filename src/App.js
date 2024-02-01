import React, { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastDisplay from './components/ForecastDisplay';
import VideoBackground from './components/VideoBackground';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState('metric');

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      setWeatherData(response.data);

    } catch (error) {
      console.error('Error fetching weather data: ', error);
      alert('Enter a valid city name');
    }
  };

  const fetchForecastData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
      setForecastData(response.data);
    } catch (error) {
      console.error('Error fetching forecast data: ', error);
    }
  };

  const handleGet = async () => {
    await fetchWeatherData();
    await fetchForecastData();
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  return (
    <div>
    <VideoBackground/>
      <div className='flex items-center justify-center mt-10'>
        <input placeholder="City" className="h-10 bg-opacity-25 backdrop-blur-lg bg-white border border-gray-200 rounded-lg py-3 px-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-500 custom-placeholder" type="text" value={city} onChange={(e) => setCity(e.target.value)} />

        <button className="h-10 ml-2 bg-opacity-25 backdrop-blur-lg bg-white hover:bg-opacity-30 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" onClick={handleGet}>Get Weather</button>
      </div>

      <div className="flex items-center justify-center mt-5">
        <label className="mr-3 bg-opacity-25 backdrop-blur-lg bg-white hover:bg-opacity-30 text-white font-bold py-2 px-4 rounded-lg cursor-pointer">
          <input type="radio" value="metric" checked={unit === 'metric'} onChange={handleUnitChange} />
          Celsius
        </label>
        <label className="bg-opacity-25 backdrop-blur-lg bg-white hover:bg-opacity-30 text-white font-bold py-2 px-4 rounded-lg cursor-pointer">
          <input type="radio" value="imperial" checked={unit === 'imperial'} onChange={handleUnitChange} />
          Fahrenheit
        </label>
      </div>

      {weatherData && <WeatherDisplay weatherData={weatherData} unit={unit} />}
      {forecastData && <ForecastDisplay forecastData={forecastData} unit={unit} />}
    </div>
  );
}

export default App;
