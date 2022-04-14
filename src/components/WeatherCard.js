import React from 'react'
import { useState } from 'react';
import '../utils/styles.css'
export const WeatherCard = ({ city, country,weather,temp,icon}) => {
    const temperatureC =  (temp-  273.15);
    const temperatureF = (temp-  273.15) * (9/5) + 32
    const [temperature, setTemperature] = useState(true)
 
  return (
      
    <div className='card'>
      
        <h1>{city}</h1>
        <h2>{country}</h2>
        <p>{weather}</p>
        <p><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer" viewBox="0 0 16 16">
        <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        <path d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0zM6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15V2.5z"/>
        </svg></span>
        {temperature? temperatureC.toFixed(2) + ' °C ':temperatureF.toFixed(2) + ' °F '} </p>
        <img src={` http://openweathermap.org/img/wn/${icon}@2x.png`} />
        <button onClick={() => setTemperature(!temperature)}>
        {temperature ? " Convert to °F " : "Convert to °C "}
       

        </button>
    </div>
  )
}
