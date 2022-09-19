import React from "react";
import { ThreeDots } from "react-loader-spinner";
import WeatherIcon from "./WeatherIcon";
import convertTime from "./convertTime";
import WeatherTemperature from "./WeatherTemperature";

export default function Weather(props) {
  if (props.weatherData.status === 404) {
    // City not found
    return (
      <div className="alert alert-warning weather-alert">
        This location is not in the database.
        <br />
        Check if the city name is correct.
      </div>
    );
  } else if (props.isLoading) {
    // Show while fetching the data
    return (
      <ThreeDots
        height="100"
        width="100"
        radius="9"
        color="#999"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: "center" }}
        wrapperClassName=""
        visible={true}
      />
    );
  } else if (props.weatherData.name && !props.isLoading) {
    return (
      <div className="Weather">
        <div className="row align-items-center">
          <div className="col-6">
            <ul>
              <li className="text-center">
                <h2>{props.weatherData.name}</h2>
              </li>
              <li className="icon-temperature">
                <div>
                  <WeatherIcon code={props.weatherData.icon} size={52} />
                </div>
                <WeatherTemperature
                  celsius={props.weatherData.temperature}
                  handleUnits={props.handleUnits}
                />
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>{convertTime(props.weatherData.date)}</li>
              <li className="description">{props.weatherData.description}</li>
              <li>Humidity: {props.weatherData.humidity}%</li>
              <li>Wind: {Math.round(props.weatherData.wind)} m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
