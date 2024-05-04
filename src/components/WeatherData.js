import React, { useContext } from "react";
import CheckWeatherContext from "../context/CheckWeatherContext";

function WeatherData() {
  const { findLocationWeatherData } = useContext(CheckWeatherContext);
  return (
    <>
      <div className="upSpace"></div>
      <div>
        <div className="text-center">
          {findLocationWeatherData.name},{findLocationWeatherData.sys.country}{" "}
          <img
            src={`https://openweathermap.org/img/wn/${findLocationWeatherData.weather[0].icon}.png`}
            alt=""
          />
        </div>
      </div>
      <hr className="hr2" />

      <div className="temperature-text d-flex justify-content-between ">
        <h6 className="temperature-title">Temperature</h6>
        <h6 className="temperature-value">
          {findLocationWeatherData.main.temp} C (
          {findLocationWeatherData.weather[0].main})
        </h6>
      </div>
      <hr className="hr2" />
      <div className="temperature-text d-flex justify-content-between ">
        <h6 className="temperature-title">Humidity</h6>
        <h6 className="temperature-value">
          {findLocationWeatherData.main.humidity}%
        </h6>
      </div>
      <hr className="hr2" />
      <div className="temperature-text d-flex justify-content-between ">
        <h6 className="temperature-title">Visibility</h6>
        <h6 className="temperature-value">
          {findLocationWeatherData.visibility} ml
        </h6>
      </div>
      <hr className="hr2" />
      <div className="temperature-text d-flex justify-content-between ">
        <h6 className="temperature-title">Wind Speed</h6>
        <h6 className="temperature-value">
          {findLocationWeatherData.wind.speed} Km/h
        </h6>
      </div>
    </>
  );
}

export default WeatherData;
