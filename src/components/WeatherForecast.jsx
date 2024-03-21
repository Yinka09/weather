import React from "react";
import "../styles/WeatherApp.css";
import "../styles/WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weather-forecast container" id="weather-forecast">
      <div className="row text-center text-white pt-5 pt-md-5 pt-lg-3 weather-forecast-mid">
        <div className="col-3 col-md-2 weather-forecast-date">Mon</div>
        <div className="col-3 col-md-2 weather-forecast-date">Tues</div>
        <div className="col-3 col-md-2 weather-forecast-date">Wed</div>
        <div className="col-3 col-md-2 weather-forecast-date">Thur</div>
        <div className="col d-none d-md-block weather-forecast-date">Fri</div>
        <div className="col d-none d-md-block weather-forecast-date">Sat</div>
      </div>
      <div className="row text-center text-white  pt-4">
        <div className="col-3 col-md-2 fs-1">☀️</div>
        <div className="col-3 col-md-2 fs-1">⛅</div>
        <div className="col-3 col-md-2 fs-1">🌧️</div>
        <div className="col-3 col-md-2 fs-1">☁️</div>
        <div className="col d-none d-md-block fs-1">🌨️</div>
        <div className="col d-none d-md-block fs-1">🌦️</div>
      </div>
      <div className="row text-center text-white pt-3 pb-5">
        <div className="col-3 col-md-2 weather-forecast-temps">
          30º<span className=" weather-forecast-temp-min">20º</span>
        </div>
        <div className="col-3 col-md-2 weather-forecast-temps">
          30º<span className=" weather-forecast-temp-min">20º</span>
        </div>
        <div className="col-3 col-md-2 weather-forecast-temps">
          30º<span className=" weather-forecast-temp-min">20º</span>
        </div>
        <div className="col-3 col-md-2 weather-forecast-temps">
          30º<span className=" weather-forecast-temp-min">20º</span>
        </div>
        <div className="col d-none d-md-block weather-forecast-temps">
          30º<span className=" weather-forecast-temp-min">20º</span>
        </div>
        <div className="col d-none d-md-block weather-forecast-temps">
          30º<span className=" weather-forecast-temp-min">20º</span>
        </div>
      </div>
    </div>
  );
}
