import React, { useState } from 'react'
import { weatherData } from '../types/weatherTypes';

interface WeatherProps{
    initialCity?: string;
}

const Weather:React.FC<WeatherProps> = ({initialCity = ''}) => {
    const [city, setCity] = useState<string>(initialCity);
    const [weatherData, setWeatherData] = useState<weatherData | null> (null);
    const [error, setError] = useState<string>('')

    const fetchWeather = async() => {
        try {

            const api_key = process.env.REACT_APP_WEATHER_API_KEY
            console.log("API Key:", api_key); 
            if (!api_key){
                setError("API key is missing");
                return;
            }
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

            // const response = await axios.get(url, {
            //     withCredentials: true
            // })

           const response = await fetch (url)
            if (!response.ok){
                throw new Error("City Not Found")
            }

           const result = await response.json()
           console.log(`Weather Data ${result}`)
           setWeatherData(result)
           setError('')
        }catch(err){
            console.error("Error fetching weather data:", err);
            setError('City Not Found')
            setWeatherData(null)
        }

    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchWeather();
    }

  return (
    <div className='weatherContainer'>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter a City name' 
                value={city}
                onChange={(e)=>setCity(e.target.value)}
            >
            </input>
            <button type='submit'>Get the Weather</button>
        </form>

        {error && <div className='error'>{error}</div>}

        {weatherData && (
            <div className="weatherInfo">
                <h2>{weatherData.name}</h2>
                <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt={weatherData.weather[0].description}
                />
                <p>Temperature: {Math.round(weatherData.main.temp)}°C</p>
                <p>Description: {weatherData.weather[0].description}</p>
                
            </div>
        )}
        
        


    </div>
  )
}

export default Weather