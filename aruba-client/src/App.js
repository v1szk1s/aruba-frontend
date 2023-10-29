import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Navbar from "./components/navbar/navbar";
import Marketplace from "./pages/marketplace/marketplace";
import Checkout from "./pages/checkout/checkout";
import Profile from "./pages/profile/profile";
import { AuthProvider } from "./helpers/authContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#EF8354",
    },
    background: {
      default: "#1A2027",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "Arial", "Open Sans", "Calibri"].join(","),
    h1: {
      fontWeight: "bold",
      marginBottom: "75px",
      color: "#fff",
      fontSize: "4.5rem",
    },
    h4: {
      //textAlign: "left",
      //paddingLeft: "200px",
      color: "#fff",
      fontSize: "1.6rem",
    },
    h5: {
      textAlign: "justify",
      fontSize: "1.3rem",
      color: "#fff",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "Arial", "Open Sans", "Calibri"].join(","),
    h1: {
      fontWeight: "bold",
      marginBottom: "75px",

      fontSize: "4.5rem",
    },
    h4: {
      fontSize: "1.6rem",
    },
    h5: {
      textAlign: "justify",
      fontSize: "1.3rem",
    },
  },
});

function App() {
  document.title = "AruPlace";
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <div className="App">
      <AuthProvider>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
