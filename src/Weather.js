import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";

function Weather() {
  const API_KEY = "83ae873f99e8cca64fd2e00d659b24be";
  const [CityName, setCityName] = useState("London");
  const [Id, setId] = useState();
  const [Min, setMin] = useState();
  const [Max, setMax] = useState();
  const [CurrentTemp, setCurrentTemp] = useState();
  const [MainWeather, setMainWeather] = useState();

  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    async function getData() {
      const result = await axios.get(apiCall);
      setId(result.data.name);
      setMin(result.data.main.temp_min);
      setMax(result.data.main.temp_max);
      setMainWeather(result.data.weather[0].main);
      //   setDesc(result.data.weather[0].description);
      //   setHumi(result.data.main.humidity);
      setCurrentTemp(result.data.main.temp);
      //   setIcon(result.data.weather[0].icon);
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
        className="search"
        placeholder="City Name"
        value={CityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <h1 className="city__name">{Id}</h1>
      <h1 className="current__temp">{CurrentTemp} °C</h1>
      <h1>Image</h1>
      <h1 className="main__weather">{MainWeather}</h1>
      <div className="min__max">
        <h3>Minimum: {Min} °C</h3>
        <h3>Maximum: {Max} °C</h3>
      </div>
      <div className="wind">
        <h3>Wind Speed:</h3>
        <h3>Wind Direction</h3>
      </div>
    </div>
  );
}

export default Weather;
