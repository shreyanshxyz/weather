import React, { useState } from "react";
import "./Weather.css";

function Weather() {
  const API_KEY = "83ae873f99e8cca64fd2e00d659b24be";
  const [CityName, setCityName] = useState("Berlin");
  const OWMapi = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&units=metric&appid=${API_KEY}`;

  return (
    <div className="weather__component">
      <input
        value={CityName}
        className="search"
        onChange={(e) => setCityName(e.target.value)}
      ></input>
      <h1 className="city__name">Hello</h1>
      <h1 className="weather__image">Image</h1>
    </div>
  );
}

export default Weather;
