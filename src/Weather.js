import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in Porto is ${response.data.main.temp} ºC`);
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=39fcb166569b324dfbfd466535557792&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return <h2>Hello from Weather</h2>;
}
