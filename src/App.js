import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h3> Spooky Weather</h3>
        <Weather defaultCity="Johannesburg" />
        <footer>
          This project was created by{" "}
          <a
            href="https://www.shecodes.io/graduates/120875-millicent-kapinga"
            target="_blank"
            rel="noopener noreferrer"
          >
            Millicent Kapinga
          </a>{" "}
          and is{"  "}
          <a
            href="https://github.com/Millykapy/weather.js "
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced on Github{"  "}
          </a>{" "}
          {"  "}
          <a
            href="https://snazzy-entremet-e4a99e.netlify.app/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            {"  "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
