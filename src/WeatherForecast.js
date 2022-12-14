import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState(false);

  function showForecast(response) {
    setForecastData(response.data.daily.slice(0, 5));
    // console.log(response);
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
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={daily} units={props.units} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
