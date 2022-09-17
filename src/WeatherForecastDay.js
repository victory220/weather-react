import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function weekDay(time) {
  time = time * 1000;
  let date = new Date(time);
  let day = date.getDay(date);
  return days[day];
}

export default function WeatherForecastDay(props) {
  function convertTemperature(t) {
    if (props.unit === "fahrenheit") {
      return (t * 9) / 5 + 32;
    } else {
      return t;
    }
  }

  return (
    <div className="ForecastDay">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">{weekDay(props.data.dt)}</div>
          <WeatherIcon code={props.data.weather[0].icon} size={36} />
          <div className="ForecastTemp">
            <span className="ForecastTemp-max">
              {Math.round(convertTemperature(props.data.temp.max))}°
            </span>
            <span className="ForecastTemp-min">
              {Math.round(convertTemperature(props.data.temp.min))}°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
