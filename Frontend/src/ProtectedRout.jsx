import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRout() {
  const {isAuth } = useAuth();
  if (!isAuth) return <Navigate to="/login" replace />;

  return <Outlet/>;
}

export default ProtectedRout;
