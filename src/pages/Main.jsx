import React from "react";
import WeatherAppData from "../components/WeatherAppData";
import WeatherForecast from "../components/WeatherForecast";

export default function Main() {
  return (
    <main>
      <WeatherAppData />
      <WeatherForecast />
    </main>
  );
}
