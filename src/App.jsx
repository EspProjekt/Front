import React from "react";
import { Routes, Route } from "react-router-dom";
import { DeviceList, Device } from "./components";

const App = () => {
  return (
    <div> 
      <Device />
      <Routes>
        <Route path="/" element={<DeviceList />} />
      </Routes>
    </div>
  );
};

export default App;
