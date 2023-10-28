import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
