import React from "react";
import FormattedDate from "./FormattedDate";
import "../styles/WeatherApp.css";
import "../styles/WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherAppCity(props) {
  return (
    <div className="weather-app-data">
      <div>
        <h1 className="weather-app-city" id="weather-app-city">
          {props.data.cityName}
        </h1>
        <p className="weather-app-details">
          <span id="date-time">
            <FormattedDate date={props.data.dateTime} />
          </span>
          <span id="description">, {props.data.description}</span>
          <br />
          Humidity: <strong id="humidity">{props.data.humidity}%</strong>, Wind:
          <strong id="wind-value"> {props.data.wind}km/h</strong>
        </p>
      </div>
      <div className="weather-app-temp-cont">
        <div className="weather-app-temp" id="weather-app-temp">
          <WeatherIcon code={props.data.icon} />

          {/* <span className="weather-app-emoji">☀️</span> */}
          {Math.round(props.data.temperature)}
        </div>
        <div className="weather-app-temp-unit">°C</div>
      </div>
    </div>
  );
}
