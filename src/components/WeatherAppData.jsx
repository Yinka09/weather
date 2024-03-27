import React from "react";
import WeatherAppTemp from "./WeatherAppTemp";
import "../styles/WeatherApp.css";
import "../styles/WeatherForecast.css";

export default function WeatherAppData() {
  return <WeatherAppTemp defaultCity="Lagos" />;
}
