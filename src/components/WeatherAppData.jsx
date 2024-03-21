import React from "react";
import WeatherAppCity from "./WeatherAppCity";
import WeatherAppTemp from "./WeatherAppTemp";
import "../styles/WeatherApp.css";
import "../styles/WeatherForecast.css";

export default function WeatherAppData() {
  return (
    <div className="weather-app-data">
      <WeatherAppCity />
      <WeatherAppTemp />
    </div>
  );
}
