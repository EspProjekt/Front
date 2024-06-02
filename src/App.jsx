import React from "react";
import { Routes, Route } from "react-router-dom";
import DeviceList from "./components/DeviceList/DeviceList";
import DeviceDetails from "./components/DeviceDetail/DeviceDetail";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DeviceList />} />
        <Route path="/device/:id" element={<DeviceDetails />} />
      </Routes>
    </div>
  );
};

export default App;
