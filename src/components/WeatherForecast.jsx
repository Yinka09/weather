import React, { useState, useEffect } from "react";
import "../styles/WeatherApp.css";
import "../styles/WeatherForecast.css";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  // If the coordinates change, set loaded to false
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (props.coordinates === undefined) {
    return null;
  }

  if (loaded) {
    return (
      <div className="weather-forecast container" id="weather-forecast">
        <div className="row text-center text-white my-5 pt-5 pt-md-5 pt-lg-3 weather-forecast-mid">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return <WeatherForecastDay key={index} data={dailyForecast} />;
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
