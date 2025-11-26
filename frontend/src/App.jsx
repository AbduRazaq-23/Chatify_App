import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Components/Register";
import Login from "./Components/LogIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Messages from "./Pages/Messages";
import Updates from "./Pages/Updates";
import Communities from "./Pages/Communities";
import Calls from "./Pages/Calls";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Messages />} />
            <Route path="messages" element={<Messages />} />
            <Route path="updates" element={<Updates />} />
            <Route path="communites" element={<Communities />} />
            <Route path="calls" element={<Calls />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>

      <ToastContainer position="top-center" theme="dark" />
    </>
  );
}

export default App;
