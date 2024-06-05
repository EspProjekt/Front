import "./style.scss";
import { Device } from "../";

const DeviceList = () => {
	const device = {
        name: "Moek",
        status: "connected",
        light: "on",
	}
  return (
    <main>
      {Array.from({ length: 1000 }).map((index) => (
        <Device key={index} device={device}/>
      ))}
    </main>
  );
};

export default DeviceList;
