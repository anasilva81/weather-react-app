import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="card">
        <div className="WeatherForecast">
          <div className="row">
            <div className="col">
              <WeatherForecastDay data={forecast[1]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "91b1f0t782317c69da4ae1170bo049f3";
    let units = "metric";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
