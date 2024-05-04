import React, { useContext, useState } from "react";
import CheckWeatherContext from "../context/CheckWeatherContext";
import weatherImageData from "../components/WeatherImageData";
function LocationWeather() {
  const { locationWeatherData } = useContext(CheckWeatherContext);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  let weatherImage;

  switch (locationWeatherData.weather[0].main.toLowerCase()) {
    case "rain":
      weatherImage = weatherImageData.rain;
      break;
    case "clouds":
      weatherImage = weatherImageData.clouds;
      break;
    case "snow":
      weatherImage = weatherImageData.snow;
      break;
    case "thunderstorm":
      weatherImage = weatherImageData.thunderstorm;
      break;

    default:
      weatherImage = weatherImageData.haze;
  }

  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <div className="card1 col-lg-4 col-md-6">
      <div className="row">
        <img src={weatherImage} alt="" />
        <div className="time-date">
          <div>
            <h5>{currentTime}</h5>
            <h5>{new Date().toDateString()}</h5>
          </div>
          <div className="temp">
            <h1>{locationWeatherData.main.temp} C</h1>
          </div>
        </div>
        <div className="city-country">
          <div>
            <h2>{locationWeatherData.name}</h2>
            <h5>{locationWeatherData.sys.country}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationWeather;
