import React from "react";
import FormattedDate from "./FormattedDate";
import "../styles/WeatherApp.css";
import "../styles/WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherAppCity(props) {
  return (
    <div className="weather-app-data container">
      <div className="col-6">
        <h1 className="weather-app-city pb-3 pb-sm-0" id="weather-app-city">
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
      <div className="weather-app-temp-cont col-6 justify-content-end">
        <div className="weather-app-temp" id="weather-app-temp">
          <WeatherIcon code={props.data.icon} size={58} />
        </div>
        <div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
