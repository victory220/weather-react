import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";

export default function Search() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [units, setUnits] = useState("celsius");

  function handleUnits(tempUnits) {
    if (tempUnits === "fahrenheit") {
      setUnits("fahrenheit");
    } else {
      setUnits("celsius");
    }
  }

  function showWeather(response) {
    setWeatherData({
      ready: true,
      status: response.status,
      name: response.data.name,
      coordinates: response.data.coord,
      date: response.data.dt,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
    setIsLoading(false);
    // console.log(response);
  }

  function fetchData() {
    setIsLoading(true);
    const apiKey = "69a8934df3c12df0dc3ffddf1977ee44";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios
      .get(url)
      .then(showWeather)
      .catch((err) => {
        setWeatherData({
          status: err.response.status,
        });
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 1) {
      fetchData();
    }
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control search-input"
          type="search"
          placeholder="Enter a city"
          onChange={updateCity}
          autoFocus
        />
        <input className="btn btn-secondary" type="submit" value="Search" />
      </form>
      <Weather
        weatherData={weatherData}
        isLoading={isLoading}
        handleUnits={handleUnits}
      />
      {weatherData.ready && (
        <WeatherForecast coordinates={weatherData.coordinates} units={units} />
      )}
    </div>
  );
}
