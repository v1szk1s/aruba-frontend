import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
    const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .get("http://localhost:8080/auth", {
          headers: {
            authToken: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setIsLogged(true);
        })
        .catch((err) => {
          localStorage.removeItem("token");
          if (err.response.status === 401) navigate("/login");
        });
    } else {
      setIsLogged(false);
    }
  }, [navigate]);

  const value = {
    isLogged,
    setIsLogged,
  };

  return (
    <AuthContext.Provider value={value}>
      {" "}
      {props.children}{" "}
    </AuthContext.Provider>
  );
}
