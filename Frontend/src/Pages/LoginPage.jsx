import Auth from "../components/organismos/Auth";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="w-screen h-screen bg-[#151414] flex items-center justify-center ">
      <Auth />
      <Link className="absolute top-6 left-6 text-4xl" to={"/"}>
        🔙
      </Link>
    </div>
  );
}

export default Login;
