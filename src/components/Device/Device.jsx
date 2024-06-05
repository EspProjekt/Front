import "./style.scss";
import { useEffect, useState } from "react";

const Device = ({device}) => {

  return (
    <article className="device">
        <div>
            <p>Device name: {device.name}</p>
            <p>Status: {device.status}</p>
            <p>Light mode: {device.light}</p>
        </div>
        <button>Change light mode</button>
    </article>
  );
};

export default Device;
