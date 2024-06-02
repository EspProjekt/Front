import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const fetchDeviceDetails = async (id) => {
  const response = await fetch(`https://example.com/api/devices/${id}`);
  const data = await response.json();
  return data;
};

const DeviceDetails = () => {
  const { id } = useParams();
  const [device, setDevice] = useState(null);

  useEffect(() => {
    const getDeviceDetails = async () => {
      const deviceData = await fetchDeviceDetails(id);
      setDevice(deviceData);
    };

    getDeviceDetails();
  }, [id]);

  if (!device) {
    return <div>Loading...</div>;
  }

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
