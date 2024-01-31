import React from 'react';

function ForecastDisplay({ forecastData, unit }) {

  const filteredData = forecastData.list.filter((item, index) => index % 8 === 0);
  const toCelcius=(n)=>{
    n=n-273.15
    return n.toFixed(2)
  }
  const toFahrenheit=(n)=>{
    n=(n-273.15)*(9/5)+32
    return n.toFixed(2)
  }
  return (
    <div className='sm:mb-10'>
      <h2  className='text-white font-bold text-3xl  mb-5 ml-5'>5-Day Forecast</h2>
      <div className='md:grid md:grid-cols-5 md:gap-4 md:ml-5 sm:grid sm:grid-cols-1 sm:gap-1 sm:w-90'>
        {filteredData.map((item, index) => (
          <div key={index} className='bg-opacity-25 backdrop-blur-lg bg-white hover:bg-opacity-30 text-white font-bold py-2 px-4 rounded-lg mt-5' >
            <p>Date: {formatDate(item.dt)}</p>
            <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="weather-icon" />
            {(unit==='imperial')?<p>Temperature: {toFahrenheit(item.main.temp)}°F</p> :<p>Temperature: {toCelcius(item.main.temp)}°C</p>}
            
            <p>Description: {item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export default ForecastDisplay;
