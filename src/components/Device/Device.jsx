import "./style.scss";
import { useEffect, useState } from "react";

const Device = () => {
  const [device, setDevice] = useState(null);

  useEffect(() => {
    setDevice([
      {
        name: "Moek",
        status: "connected",
        light: "on",
      },
    ]);
  }, []);

  return (
    <main>
      {device ? (
        device.map((i, index) => (
          <section key={index}>
            <div>
              <p>Device name: {i.name}</p>
              <p>Status: {i.status}</p>
              <p>Light mode: {i.light}</p>
            </div>
            <button>Change light mode</button>
          </section>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default Device;
