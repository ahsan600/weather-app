import React, { useContext, useState } from "react";
import CheckWeatherContext from "../context/CheckWeatherContext";
import WeatherData from "./WeatherData";

function FindLocationWeather() {
  const [cityName, setCityName] = useState("");
  const { findLocationWeatherData, findLocationWeather, resultFind } =
    useContext(CheckWeatherContext);

  const HandleCityChange = (e) => {
    e.preventDefault();
    setCityName("");

    findLocationWeather(cityName.toLowerCase());
  };
  const HandleCityName = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div className="card2 col-lg-4 col-md-6">
      <div className="row cloud">
        {/* <i className="fa-solid fa-cloud"></i> */}
        <img
          src={`https://openweathermap.org/img/wn/${findLocationWeatherData.weather[0].icon}.png`}
          alt=""
          style={{ width: "150px" }}
        />
      </div>
      <div className="row cloud-title">
        <h3>{findLocationWeatherData.weather[0].main}</h3>
        <hr className="hr" />
      </div>
      <div className="input-area">
        <form onSubmit={HandleCityChange}>
          <input
            type="text"
            value={cityName}
            className="input"
            placeholder="Search Any City"
            required
            onChange={HandleCityName}
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div className="resultNotFound text-danger">
        {resultFind && "City Not Found"}
      </div>

      <WeatherData />
    </div>
  );
}

export default FindLocationWeather;
