import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.current.temperature,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city name..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h2> {weatherData.city} </h2>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize"> {weatherData.description} </li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />

              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">℃</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity} </li>
              <li>Wind: {weatherData.wind} </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4o0269f4b7t3d5f7f0cfc4a0af394b27";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${weatherData.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
