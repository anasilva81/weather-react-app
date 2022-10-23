import React, { useState } from "react";

import "./UnitConversion.css";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="UnitConversion">
        <span className="curr-temp">{Math.round(props.celsius)}</span>
        ⁰C |
        <a href="#top" onClick={showFahrenheit}>
          ⁰F
        </a>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="UnitConversion">
        <span className="curr-temp" id="current-temperature">
          {Math.round(fahrenheit)}
        </span>
        <a href="#top" onClick={showCelsius}>
          ⁰C
        </a>{" "}
        | ⁰F
      </div>
    );
  }
}
