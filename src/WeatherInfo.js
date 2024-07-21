import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h2> {props.data.city} </h2>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />{" "}
        </li>
        <li className="text-capitalize"> {props.data.description} </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} />
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            />

            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">℃</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity} % </li>
            <li>Wind: {props.data.wind} km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
