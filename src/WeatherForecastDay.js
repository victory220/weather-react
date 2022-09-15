import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  return (
    <div className="ForecastDay">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="ForecastTemp">
            <span className="ForecastTemp-max">19°</span>
            <span className="ForecastTemp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
