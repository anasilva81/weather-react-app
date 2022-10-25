import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import UnitConversion from "./UnitConversion";
import WeatherForecast from "./WeatherForecast";
import "./Current.css";

import axios from "axios";

export default function Current(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      currTemperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      //temperatureMin: response.data.daily[0].temperature.minimum,
      //temperatureMax: response.data.daily[0].temperature.maximum,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "91b1f0t782317c69da4ae1170bo049f3";
    let units = "metric";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.loaded) {
    return (
      <div className="container">
        <div className="wrap-curr-info">
          <div className="row justify-content-between">
            <div className="col-6">
              <h1>{weatherData.city}</h1>
              <h3>
                <CurrentDate date={weatherData.date} />
              </h3>
            </div>
            <div className="col-6">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Insert city"
                  className="search-input"
                  onChange={handleCityChange}
                />
                <input type="submit" value="Search" />
                <button className="reset-btn" id="reset-btn">
                  Current
                </button>
              </form>
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

                    <UnitConversion celsius={weatherData.currTemperature} />

                    <span className="curr-temp-unit"></span>
                    <p className="curr-extremes">
                      <span className="curr-min-temp" id="curr-min-temp">
                        {weatherData.temperatureMin}
                      </span>
                      ⁰
                      <span className="curr-max-temp" id="curr-max-temp">
                        {weatherData.temperatureMax}
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
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
