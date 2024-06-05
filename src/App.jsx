import { Routes, Route } from "react-router-dom";
import { DeviceList } from "./components";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DeviceList />} />
      </Routes>
    </div>
  );
};

export default App;
