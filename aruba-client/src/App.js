import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Navbar from "./components/navbar/navbar";
import Marketplace from "./pages/marketplace/marketplace";
import Checkout from "./pages/checkout/checkout";
import { AuthProvider } from "./helpers/authContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#EF8354",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "Arial", "Open Sans", "Calibri"].join(","),
    h1: {
      fontWeight: "bold",
      marginBottom: "75px",
      color: "#fff",
      fontSize: "80px",
    },
    h4: {
      //textAlign: "left",
      //paddingLeft: "200px",
      color: "#fff",
      fontSize: "25px",
    },
    h5: {
      textAlign: "justify",
      fontSize: "28px",
      color: "#fff",
    },
  },
});

function App() {
  document.title = "Az új oldal címe";
  return (
    <div className="App">
      <AuthProvider>
        <ThemeProvider theme={darkTheme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/checkout/:id" element={<Checkout />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
