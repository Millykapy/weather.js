import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
