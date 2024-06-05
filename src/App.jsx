import { Routes, Route } from "react-router-dom";
import { DeviceList } from "./components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<DeviceList />} />
      </Routes>
    </div>
  );
};

export default App;
