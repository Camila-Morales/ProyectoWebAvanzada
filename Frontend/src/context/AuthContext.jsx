import { createContext, useEffect, useState } from "react";
import { loginRequest, registerRequest, verityTokenRequest } from "../Api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [error, setErrors] = useState([]);
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setAuthenticated(true);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };
  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res.data);
      setUser(res.data);
      setAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setAuthenticated(false);
    setUser(null);
  };
  useEffect(() => {
    if (error.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    async function cheackLogin() {
      const cookie = Cookies.get();
      if (cookie.token) {
        try {
          const res = await verityTokenRequest(cookie.token);
          console.log(res);
          if (!res.data) setAuthenticated(false);
          setAuthenticated(true);
          setUser(res.data);
        } catch (error) {
          setAuthenticated(false);
          setUser(null);
        }
      }
    }
    cheackLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, signup, isAuthenticated, error, signin,logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
