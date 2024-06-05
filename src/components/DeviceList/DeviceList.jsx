import "./style.scss";
import { Device } from "../";

const DeviceList = () => {
  return (
    <main>
      {Array.from({ length: 15 }).map((index) => (
        <Device key={index} />
      ))}
    </main>
  );
};

export default DeviceList;
