// CheckWeatherState.js
import React, { useState } from "react";
import CheckWeatherContext from "./CheckWeatherContext";

function CheckWeatherState(props) {
  const [checkLocation, setCheckLocation] = useState(false);
  const [locationWeatherData, setLocationWeatherData] = useState({});
  const [findLocationWeatherData, setFindLocationWeatherData] = useState({});
  const [resultFind, setResultFind] = useState(false);
  const findLocationWeather = async (cityName) => {
    const fetchWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8127745bac049df1cf72ef6de2cb1d59&units=metric`
    );
    const parseWeather = await fetchWeather.json();

    if (parseWeather.cod !== "404") {
      setFindLocationWeatherData(parseWeather);
      setResultFind(false);
    } else {
      setResultFind(true);
    }
  };
  function checkLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  async function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const fetchWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8127745bac049df1cf72ef6de2cb1d59&units=metric`
    );
    const parseWeather = await fetchWeather.json();

    setLocationWeatherData(parseWeather);
    setFindLocationWeatherData(parseWeather);
    setTimeout(() => {
      setCheckLocation(true);
    }, 3000);
  }

  function error() {
    console.log("Unable to retrieve your location");
    setCheckLocation(false);
  }

  return (
    <CheckWeatherContext.Provider
      value={{
        checkLocation,
        locationWeatherData,
        checkLocationClick,
        findLocationWeather,
        findLocationWeatherData,
        resultFind,
      }}
    >
      {props.children}
    </CheckWeatherContext.Provider>
  );
}

export default CheckWeatherState;
