import React from "react";
import WeatherAppTemp from "../components/WeatherAppTemp";
import WeatherForecast from "../components/WeatherForecast";

export default function Main() {
  return (
    <main>
      <WeatherAppTemp defaultCity="Lagos" />
      <WeatherForecast />
    </main>
  );
}
