import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";

function Weather() {
  const API_KEY = "83ae873f99e8cca64fd2e00d659b24be";
  const [CityName, setCityName] = useState("Gwalior");
  const [Id, setId] = useState();
  const [Min, setMin] = useState();
  const [Max, setMax] = useState();
  const [CurrentTemp, setCurrentTemp] = useState();
  const [Humi, setHumi] = useState();
  const [Desc, setDesc] = useState();
  const [WSpeed, setWspeed] = useState();

  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    async function getData() {
      const result = await axios.get(apiCall);
      setId(result.data.name);
      setMin(result.data.main.temp_min);
      setMax(result.data.main.temp_max);
      setDesc(result.data.weather[0].description);
      setHumi(result.data.main.humidity);
      setCurrentTemp(result.data.main.temp);
      setWspeed(result.data.wind.speed);
      //   setIcon(result.data.weather[0].icon);
    }

    console.log(getData);
    // return () => {
    //     cleanup
    // }
    getData();
  }, [apiCall]);

  return (
    <div className="weather__main">
      <div className="weather__top">
        <input
          className="search"
          placeholder="City Name"
          value={CityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <h3 className="weather__desc">{Desc}</h3>
        <h1 className="city__name">{Id}</h1>
      </div>

      <div className="weather__bottom">
        <h1 className="current__temp">{CurrentTemp} °C</h1>
        <div className="min__max">
          <h3 className="min">Minimum: {Min} °C</h3>
          <h3 className="max">Maximum: {Max} °C</h3>
        </div>
        <div className="hum__wind">
          <h3 className="hum">Humidity: {Humi}%</h3>
          <h3 className="wind__speed">Wind Speed: {WSpeed} m/s</h3>
        </div>
      </div>
    </div>
  );
}

export default Weather;
