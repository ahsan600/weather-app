import React from "react";
import gif from "../assets/cloud.gif";
function CheckLocation() {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-center col-md-12">
          <div className="bg-size">
            <div className="cloud-loading d-flex justify-content-center">
              <img className="w-5" src={gif} alt="Loading..." />
            </div>
            <div className="location-detail">
              <div className="detail-title text-center">
                <h2>Detecting Your Location</h2>
              </div>
              <div className="detail-para text-center">
                <p>
                  Your current location will be displayed on the App <br />&
                  used for calculating Real time weather
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckLocation;
