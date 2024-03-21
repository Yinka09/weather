import React from "react";
import "../styles/WeatherApp.css";
import "../styles/WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weather-forecast container" id="weather-forecast">
      <div className="row text-center text-white pt-5">
        <div className="col-3 col-md-2">Mon</div>
        <div className="col-3 col-md-2">Tues</div>
        <div className="col-3 col-md-2">Wed</div>
        <div className="col-3 col-md-2">Thur</div>
        <div className="col d-none d-md-block">Fri</div>
        <div className="col d-none d-md-block">Sat</div>
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
