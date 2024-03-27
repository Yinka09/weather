import React, { useState } from "react";
import axios from "axios";
import "../styles/WeatherApp.css";
import "../styles/WeatherForecast.css";
import "../styles/WeatherApp.css";

export default function WeatherAppTemp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      cityName: response.data.name,
      wind: response.data.wind.speed,
      dateTime: "Friday 18:00",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app-data">
        <div>
          <h1 className="weather-app-city" id="weather-app-city">
            {weatherData.cityName}
          </h1>
          <p className="weather-app-details">
            <span id="date-time">{weatherData.dateTime}</span>
            <span id="description">, {weatherData.description}</span>
            <br />
            Humidity: <strong id="humidity">{weatherData.humidity}%</strong>,
            Wind:
            <strong id="wind-value"> {weatherData.wind}km/h</strong>
          </p>
        </div>
        <div className="weather-app-temp-cont">
          <div className="weather-app-temp" id="weather-app-temp">
            <img
              className="weather-app-emoji"
              src={weatherData.iconUrl}
              alt={weatherData.description}
            />
            {/* <span className="weather-app-emoji">☀️</span> */}
            {Math.round(weatherData.temperature)}
          </div>
          <div className="weather-app-temp-unit">°C</div>
        </div>
      </div>
    );
  } else {
    let city = "Lagos";
    const APIKey = "5863935ee9cca4c02ed68203f807c65b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${APIKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return "Loading...";
  }
}
