import React, { useContext, useEffect } from "react";
import CheckLocation from "./CheckLocation";
import ShowWeather from "./ShowWeather";
import CheckWeatherContext from "../context/CheckWeatherContext";

function AppContent() {
  const { checkLocation, checkLocationClick } = useContext(CheckWeatherContext);
  useEffect(() => {
    checkLocationClick();
    // eslint-disable-next-line
  }, []);

  return <>{checkLocation ? <ShowWeather /> : <CheckLocation />}</>;
}

export default AppContent;
