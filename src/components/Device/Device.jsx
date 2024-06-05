import { useWebSocket } from "../../api/ws";
import "./style.scss";

const Device = ({ device }) => {
  const { name, status, is_light_on, last_update, uptime, id } = device;
  const { handleLightModeChange, handleReconnect, handleDisconnect } =
    useWebSocket();

  const statusName = status ? "Connected" : "Disconnected";
  const LightMode = is_light_on ? "On" : "Off";
  const date = new Date(last_update * 1000).toLocaleString();

  function handleConnectClick() {
    handleReconnect(id);
  }

  function handleLightClick() {
    handleLightModeChange(id);
  }

  function handleDisconnectClick() {
    handleDisconnect(id);
  }

  return (
    <article className="device">
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <p>
          Updated at:
          <span className={status ? "connected" : "disconnected"}>{date}</span>
        </p>
        <p>
          Uptime:
          <span className={status ? "connected" : "disconnected"}>
            {uptime}
          </span>
        </p>
      </div>
      <div>
        <p>
          Status:
          <span className={status ? "connected" : "disconnected"}>
            {statusName}
          </span>
        </p>
        <p>
          Light mode:
          <span className={status ? "connected" : "disconnected"}>
            {LightMode}
          </span>
        </p>
      </div>
      <div>
        {status ? (
          <button onClick={handleDisconnectClick}>Disconnect</button>
        ) : (
          <button onClick={handleConnectClick}>Connect</button>
        )}
        <button disabled={!status} onClick={handleLightClick}>
          Change light mode
        </button>
      </div>
    </article>
  );
};

export default Device;
