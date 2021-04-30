import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";

function Weather() {
  const API_KEY = "83ae873f99e8cca64fd2e00d659b24be";
  const [CityName, setCityName] = useState("Berlin");
  const [Id, setId] = useState();
  const [Maahol, setMaahol] = useState();
  const [Desc, setDesc] = useState("");
  const [Humi, setHumi] = useState();
  const [Tempr, setTempr] = useState();
  const [Icon, setIcon] = useState();

  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    async function getData() {
      const result = await axios.get(apiCall);
      setId(result.data.name);
      setMaahol(result.data.weather[0].main);
      setDesc(result.data.weather[0].description);
      setHumi(result.data.main.humidity);
      setTempr(result.data.main.temp);
      setIcon(result.data.weather[0].icon);
    }

    console.log(getData);
    // return () => {
    //     cleanup
    // }
    getData();
  });

  return (
    <div className="weather__component">
      {/* <input
        value={CityName}
        className="search"
        onChange={(e) => setCityName(e.target.value)}
      ></input>
      <h1 className="city__name">Hello</h1>
      <h1 className="weather__image">Image</h1> */}
      <input
        placeholder="City Name"
        value={CityName}
        onChange={(e) => setCityName(e.target.value)}
      />

      <div className="temp__cont">
        <div className="temp__contl">{Tempr}</div>

        <div className="temp__contr">{Humi}</div>
      </div>

      <img
        src={`http://openweathermap.org/img/wn/${Icon}.png`}
        alt="Icon"
      ></img>

      <div>
        <h1>City ID is: {Id}</h1>
      </div>

      <div>
        <div>
          <h3>It is currently {Maahol}</h3>
        </div>
        <p>{Desc}</p>
      </div>
    </div>
  );
}

export default Weather;
