import React from "react";
import "./Current.css";
import SearchBar from "./SearchBar";

export default function Current() {
  let weatherData = {
    city: "Porto",
    date: "Tuesday, 4 October",
    hour: "16:03",
    description: "Sunny",
    currentTemp: 26,
    minTemp: 15,
    maxTemp: 28,
    humidity: 36,
    wind: 5,
  };

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
                    src="https://i.pinimg.com/originals/53/22/c2/5322c2cad533e12e552d0dfdc89b4c25.png"
                    alt=""
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
                    {weatherData.currentTemp}
                  </span>

                  <span className="curr-temp-unit">
                    <a
                      href=""
                      id="celsius-link"
                      class="active"
                      rel="noreferrer"
                    >
                      ⁰C
                    </a>{" "}
                    |
                    <a href="#" id="fahrenheit-link">
                      ⁰F
                    </a>
                  </span>
                  <p className="curr-extremes">
                    <span className="curr-min-temp" id="curr-min-temp">
                      {weatherData.minTemp}
                    </span>
                    ⁰
                    <span className="curr-max-temp" id="curr-max-temp">
                      {weatherData.maxTemp}
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
                      Wind: <span id="wind">{weatherData.wind}</span> km/h
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
}
