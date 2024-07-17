import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setReady(true);
  }
  if (ready) {
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
        <h2>Johannesburg</h2>
        <ul>
          <li>Monday 17:05</li>
          <li>Clear Sky</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
                alt="clear-sky-day"
                className="float-left"
              />

              <span className="temperature">{temperature} </span>
              <span className="unit">℃</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 10%</li>
              <li>Humidity: 80%</li>
              <li>Wind: 15km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4o0269f4b7t3d5f7f0cfc4a0af394b27";
    let city = "Paris";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
