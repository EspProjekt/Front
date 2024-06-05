import React from "react";
import { Routes, Route } from "react-router-dom";
import { DeviceDetails, DeviceList, Device } from "./components";

const App = () => {
  return (
    <div> 
      <Device />
      <Routes>
        <Route path="/" element={<DeviceList />} />
        <Route path="/device/:id" element={<DeviceDetails />} />
      </Routes>
    </div>
  );
};

export default App;
