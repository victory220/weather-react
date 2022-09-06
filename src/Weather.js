import React, { useState, useEffect } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function showWeather(response) {
    setIsLoading(false);
    setWeatherData({
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response);
  }

  useEffect(() => {
    if (props.city) {
      setIsLoading(true);
      let apiKey = "69a8934df3c12df0dc3ffddf1977ee44";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
      axios.get(url).then(showWeather);
    }
  }, [props.city]);

  if (props.city && !isLoading) {
    return (
      <div className="Weather">
        <div className="row align-items-center">
          <div className="col-6">
            <ul>
              <li>
                <h2 className="text-center">{weatherData.name}</h2>
              </li>
              <li className="icon-temperature d-flex justify-content-center align-items-center">
                <div>
                  <img src={weatherData.iconUrl} alt="weather icon" />
                </div>
                <div className="temperature">
                  {Math.round(weatherData.temperature)}
                  <span className="units">°C</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li className="description">{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (isLoading) {
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
  } else {
    return <></>;
  }
}
