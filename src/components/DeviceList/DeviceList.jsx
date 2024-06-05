import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Device } from '../';

const DeviceList = () => {
	const { id } = useParams();
	const [device, setDevice] = useState(null);

	useEffect(() => {
	}, [id]);


	return (
		<div>
			{Array.from({ length: 15 }).map((_, index) => <Device />)}
		</div>
		);
};

export default DeviceList;
