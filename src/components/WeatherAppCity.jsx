import React from "react";
import FormattedDate from "./FormattedDate";
import "../styles/WeatherApp.css";
import "../styles/WeatherForecast.css";

export default function WeatherAppCity(props) {
  // let props.data = {
  //   cityName: "Lagos",
  //   dateTime: "Friday 18:00",
  //   description: "scattered clouds",
  //   humidity: "74",
  //   wind: "6.17",
  // };

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
          <img
            className="weather-app-emoji"
            src={props.data.iconUrl}
            alt={props.data.description}
          />
          {/* <span className="weather-app-emoji">☀️</span> */}
          {Math.round(props.data.temperature)}
        </div>
        <div className="weather-app-temp-unit">°C</div>
      </div>
    </div>
  );
}
