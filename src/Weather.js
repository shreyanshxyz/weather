import React, { useState } from "react";
import "./Weather.css";

function Weather() {
  const [CityName, setCityName] = useState("Berlin");

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
