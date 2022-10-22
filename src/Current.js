import React, { useState } from "react";
import "./Current.css";
import SearchBar from "./SearchBar";
import axios from "axios";

export default function Current() {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.city,
      date: "Tuesday, 4 October",
      hour: "16:03",
      currTemperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      //temperatureMin: response.data.daily[0].temp.min,
      //temperatureMax: response.data.daily[0].temp.max,
    });

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="wrap-curr-info">
          <div className="row justify-content-between">
            <div className="col-6">
              <h1 id="city">{weatherData.city}</h1>
              <h3 id="date">{weatherData.date}</h3>
              <h3 id="hour">{weatherData.hour}</h3>
            </div>
            <div className="col-6">
              <SearchBar />
            </div>
            <p>
              <div className="w-100"></div>
              <div className="curr-info">
                <div className="row justify-content-start">
                  <div className="col-3">
                    <img
                      src={weatherData.icon}
                      alt={weatherData.description}
                      className="curr-icon"
                      id="curr-icon"
                    />

                    <p className="curr-desc" id="curr-description">
                      {weatherData.description}
                    </p>
                  </div>

                  <div className="col-2">
                    <h4>Current</h4>
                    <span className="curr-temp" id="current-temperature">
                      {Math.round(weatherData.currTemperature)}
                    </span>

                    <span className="curr-temp-unit">
                      <a
                        href="#top"
                        id="celsius-link"
                        class="active"
                        rel="noreferrer"
                      >
                        ⁰C
                      </a>{" "}
                      |
                      <a href="#top" id="fahrenheit-link">
                        ⁰F
                      </a>
                    </span>
                    <p className="curr-extremes">
                      <span className="curr-min-temp" id="curr-min-temp">
                        15
                      </span>
                      ⁰
                      <span className="curr-max-temp" id="curr-max-temp">
                        22
                      </span>
                      ⁰
                    </p>
                  </div>

                  <div className="col-3">
                    <ul>
                      <li>
                        Humidity:{" "}
                        <span id="humidity">{weatherData.humidity}</span> %
                      </li>
                      <li>
                        Wind:{" "}
                        <span id="wind">{Math.round(weatherData.wind)}</span>{" "}
                        km/h
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "91b1f0t782317c69da4ae1170bo049f3";
    let units = "metric";
    let city = "Porto";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
