import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  const storedUnits = localStorage.getItem("temperatureUnits");

  if (unit === "celsius" && storedUnits) {
    if (storedUnits === "fahrenheit") {
      setUnit("fahrenheit");
    }
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
    localStorage.setItem("temperatureUnits", "fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
    localStorage.clear();
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="temperature">
        {Math.round(props.celsius)}
        <span className="units">
          {" "}
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="temperature">
        {Math.round(fahrenheit())}
        <span className="units">
          {" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          {""} | °F
        </span>
      </div>
    );
  }
}
