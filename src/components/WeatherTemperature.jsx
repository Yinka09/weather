import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenhiet");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="weather-app-temp ">
        {" "}
        <span className="weather-temp-value">{Math.round(props.celsius)}</span>
        <span className="weather-app-temp-unit">
          °C |{" "}
          <a onClick={showFahrenheit} href="/">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenhiet = (props.celsius * 9) / 5 + 32;
    return (
      <div className="weather-app-temp ">
        {" "}
        <span className="weather-temp-value">{Math.round(fahrenhiet)}</span>
        <span className="weather-app-temp-unit">
          <a onClick={showCelsius} href="/">
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
