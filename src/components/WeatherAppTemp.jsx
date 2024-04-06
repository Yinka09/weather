import React, { useState } from "react";
import axios from "axios";
import "../styles/Header.css";
import "../styles/WeatherApp.css";
import "../styles/WeatherForecast.css";
import WeatherAppCity from "./WeatherAppCity";
import WeatherForecast from "./WeatherForecast";

export default function WeatherAppTemp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      cityName: response.data.name,
      wind: response.data.wind.speed,
      dateTime: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    // City
    const APIKey = "f3887e262c88d1158f7e2ef4998e234c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <header className=" ">
          <form
            onSubmit={handleSubmit}
            className="container search-form"
            id="search-form"
          >
            <input
              onChange={handleChange}
              type="search"
              placeholder="Enter a city..."
              className="col-8 col-xl-9 search-form-input "
              id="search-form-input"
              autoFocus="on"
              required
            />

            <input
              type="submit"
              value="Search"
              className="col-3 search-form-button"
            />
          </form>
        </header>
        <WeatherAppCity data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
