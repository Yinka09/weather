import React from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";

export default function Weather(props) {
  let APIKey = "f3887e262c88d1158f7e2ef4998e234c";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${APIKey}&units=metric`;

  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}℃`);
  }

  axios.get(url).then(handleResponse);
  return (
    <div>
      <Puff
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
