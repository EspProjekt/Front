import "./style.scss";
import { Device } from "../";
import { useWebSocket } from "../../api/ws";
import { useEffect } from "react";

const DeviceList = () => {
	const { deviceList } = useWebSocket();

	const device = {
        name: "Moek",
        status: "connected",
        light: "on",
	}

	return (
	<main>
		{deviceList.map((device, index) => (
		<Device key={index} device={device}/>
		))}
	</main>
	);
};

export default DeviceList;
