import React from "react";
import "../styles/WeatherApp.css";
import "../styles/WeatherForecast.css";

export default function WeatherAppTemp() {
  return (
    <div className="weather-app-temp-cont">
      <div className="weather-app-temp" id="weather-app-temp">
        <span className="weather-app-emoji">☀️</span>32
      </div>
      <div className="weather-app-temp-unit">°C</div>
    </div>
  );
}
