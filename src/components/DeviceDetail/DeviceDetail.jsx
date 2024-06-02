import React from "react";
import { useParams } from "react-router-dom";

const DeviceDetails = () => {
  const { id } = useParams();
  const device = { id: id, name: "Arduino Uno", uptime: "24 hours" };

  return (
    <div>
      <h1>Szczegóły Urządzenia</h1>
      <p>ID: {device.id}</p>
      <p>Name: {device.name}</p>
      <p>Uptime: {device.uptime}</p>
      <button>Przycisk</button>
    </div>
  );
};

export default DeviceDetails;
