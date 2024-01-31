import { useState } from "react";
import LoginP from "../components/moleculas/Login";
import imgLogin from "/imgLogin.jpg";
function Login() {
  const [register, setRegister] = useState(false);

  const Register = () => {
    setRegister(!register);
  };
  return (
    <div className="w-screen h-screen bg-[#151414] flex items-center justify-center ">
      <div className="w-[56rem] h-[30rem]  flex rounded-3xl relative overflow-hidden">
        <LoginP register={Register} />
        <div
          className={`w-[28rem] h-[30rem] z-30 overflow-hidden relative transition ease-in-out duration-700 ${
            register ? "-translate-x-full" : null
          }`}
        >
          <img
            src={imgLogin}
            className="w-full h-full object-cover"
            alt="login"
          />
          <div className="w-[28rem] h-[30rem] bg-black absolute top-0 opacity-75"></div>
          <div
            className={`absolute top-8 text-white text-8xl text-center font-serif transition ${
              register ? "opacity-0 transition duration-1000" : " transition duration-1000"
            }`}
          >
            <h2>Supera tus</h2>
            <h2>limites</h2>
            <h2>¡AHORA!</h2>
          </div>
          <div
            className={`absolute top-14 text-white text-7xl text-center font-serif transition ${
              register ? "opacity-100 transition duration-1000" : "opacity-0 "
            }`}
          >
            <h2>Lo que te Propongas</h2>
            <h2>Consigelo</h2>
            <h2>No te rindas</h2>
          </div>
        </div>
        <div className="absolute top-0 right-0">
            <LoginP register={Register} />
        </div>
        
      </div>
    </div>
  );
}

export default Login;
