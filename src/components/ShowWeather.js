import React from "react";

import CurrentLocationWeather from "./CurrentLocationWeather";
import FindLocationWeather from "./FindLocationWeather";
function ShowWeather() {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="row card0 d-flex justify-content-center align-items-center">
            <CurrentLocationWeather />
            <FindLocationWeather />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowWeather;
