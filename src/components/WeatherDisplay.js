// WeatherDisplay.js
import React from 'react';

function WeatherDisplay({ weatherData ,unit}) {
  const { main, weather, wind } = weatherData;
  const getWindDirection = (degree) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degree / 45) % 8;
    return directions[index];
  };

  const toCelcius=(n)=>{
    n=n-273.15
    return n.toFixed(2)
  }
  const toFahrenheit=(n)=>{
    n=(n-273.15)*(9/5)+32
    return n.toFixed(2)
  }
  return (
    <div className='w-100 h-100 my-5 flex items-center justify-center mb-4'>
    <div className='h-80 w-80 p-5 bg-opacity-25 backdrop-blur-lg bg-white hover:bg-opacity-30 text-white font-bold py-2 px-4 rounded-lg'> 
      <h2>Current Weather</h2>
      <img className="" src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt="weather-icon" />
      {(unit==='imperial')?
      <>
      <p>Temperature: {toFahrenheit(main.temp)}°F</p>
      <p>Min Temperature: {toFahrenheit(main.temp_min)}°F</p>
      <p>Max Temperature: {toFahrenheit(main.temp_max)}°F</p>
     </>
      :
      <>
      <p>Temperature: {toCelcius(main.temp)}°C</p>
      <p>Min Temperature: {toCelcius(main.temp_min)}°C</p>
      <p>Max Temperature: {toCelcius(main.temp_max)}°C</p>
      </>
      }
  
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {(wind.speed*3.6).toFixed(2)} km/hr</p>
      <p>Wind Direction: {getWindDirection(wind.deg)}</p>
      <p>Description: {weather[0].description}</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
