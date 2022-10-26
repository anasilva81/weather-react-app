import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherIcon" size={30}>
        <img src={props.data.condition.icon_url} alt="icon" />
      </div>
      <div className="WeatherDescription">
        {props.data.condition.description}
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-min">{minTemp()}</span>
        <span className="WeatherForecast-temperature-max">{maxTemp()}</span>
      </div>
    </div>
  );
}
