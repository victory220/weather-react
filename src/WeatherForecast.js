import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState(false);
  const [unit, setUnit] = useState("celsius");
  const [storedUnits, setStoredUnits] = useState(
    localStorage.getItem("temperatureUnits")
  );

  useEffect(() => {
    if (unit === "celsius" && storedUnits) {
      if (storedUnits === "fahrenheit") {
        setUnit("fahrenheit");
      }
    }
  }, [storedUnits, unit]);

  function showForecast(response) {
    setForecastData(response.data.daily);
    console.log(response);
  }

  useEffect(() => {
    const apiKey = "69a8934df3c12df0dc3ffddf1977ee44";
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showForecast);
  }, [props.coordinates]);

  if (forecastData) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map((daily, index) => {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={daily} unit={unit} />
                </div>
              );
            } else {
              return <></>;
            }
          })}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
