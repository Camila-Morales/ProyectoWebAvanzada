import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest } from "../Api/auth";
import Cookies from "js.cookie";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const contex = useContext(AuthContext);
  if (!contex) {
    throw new Error("UseAuth must be used within an AuthProvider");
  }
  return contex;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErros] = useState([]);
  const signup = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuth(true);
    } catch (err) {
      setErros(err.response.data);
    }
  };
  useEffect(() => {
    const cookie = Cookies.get();
  }, []);
  return (
    <AuthContext.Provider value={{ signup, user, isAuth, errors }}>
      {children}
    </AuthContext.Provider>
  );
}
