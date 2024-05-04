import React from "react";

import CheckWeatherState from "./context/CheckWeatherState";
import AppContent from "./components/AppContent";

function App() {
  return (
    <>
      <CheckWeatherState>
        <AppContent />
      </CheckWeatherState>
    </>
  );
}

export default App;
