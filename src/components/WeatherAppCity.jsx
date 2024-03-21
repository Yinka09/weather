import React from "react";
import "../styles/WeatherApp.css";
import "../styles/WeatherForecast.css";

export default function WeatherAppCity() {
  let weatherData = {
    cityName: "Lagos",
    dateTime: "Friday 18:00",
    description: "scattered clouds",
    humidity: "74",
    wind: "6.17",
  };

  return (
    <div>
      <h1 className="weather-app-city" id="weather-app-city">
        {weatherData.cityName}
      </h1>
      <p className="weather-app-details">
        <span id="date-time">{weatherData.dateTime}</span>
        <span id="description">, {weatherData.description}</span>
        <br />
        Humidity: <strong id="humidity">{weatherData.humidity}%</strong>, Wind:
        <strong id="wind-value"> {weatherData.wind}km/h</strong>
      </p>
    </div>
  );
}
