import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="col-4 col-md-2 ">
      {" "}
      <div className="weather-forecast-date pt-xl-4">{day()}</div>
      <div className="row text-center text-white  pt-4 pt-xl-5">
        <div className=" fs-1">
          <WeatherIcon code={props.data.weather[0].icon} size={36} />
        </div>
      </div>
      <div className="row text-center text-white pb-5 pb-xl-0 pt-xl-4">
        <div className=" weather-forecast-temps">
          {maxTemperature()}
          <span className=" weather-forecast-temp-min">
            {" "}
            {minTemperature()}
          </span>
        </div>
      </div>
    </div>
  );
}
