import { useState } from "react";

function Login({ register }) {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    console.log("Datos del formulario:", user);
  };
  const handleActivate = (e) => {
    e.preventDefault();
    register();
  };
  return (
    <div className=" relative w-[28rem] h-[30rem] text-white bg-red-700 flex flex-col  gap-5 justify-center items-center ">
      <h1 className="absolute top-9 text-center">
        <strong className="text-xl">Iniciar Seción</strong>
        <hr className="w-[15rem]" />
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <label htmlFor="user">Usuario</label>
          <input
            className="styleInputs"
            type="text"
            id="user"
            name="userName"
            value={user.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="passw">Contraseña</label>
          <input
            className="styleInputs"
            type="password"
            id="passw"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="bg-red-900 h-12 rounded-3xl hover:bg-red-950"
          type="submit"
        >
          Ingresar
        </button>
      </form>
      <p>
        ¿No tienes cuenta?{" "}
        <button onClick={handleActivate}>
          <strong>Registrate</strong>
        </button>{" "}
      </p>
    </div>
  );
}

export default Login;
