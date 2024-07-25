import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    return;
  }
  let apiKey = "4o0269f4b7t3d5f7f0cfc4a0af394b27";

  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${props.coordinates.latitude}&lon=${props.coordinates.longitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day"> Wed </div>
          <WeatherIcon code="rain-day" size={32} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">15°</span>
            <span className="WeatherForecast-temperature-min">20°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
