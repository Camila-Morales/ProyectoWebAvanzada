import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Register({ login }) {
  const { register, handleSubmit } = useForm();
  const { signup, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleActivate = (e) => {
    e.preventDefault();
    login();
  };
  const OnSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  useEffect(() => {
    if(isAuthenticated) navigate('/profile');
  }, [isAuthenticated,navigate]);
  return (
    <div className=" relative w-[28rem] h-[30rem] text-white bg-red-700 flex flex-col  gap-5 justify-center items-center ">
      <h1 className="absolute top-9 text-center">
        <strong className="text-xl">Registrate</strong>
        <hr className="w-[15rem]" />
      </h1>
      <form
        onSubmit={OnSubmit}
        className="flex flex-col h-96 gap-3 justify-end"
      >
        <div className="flex gap-5">
          <input
            className="styleInputs"
            type="text"
            {...register("name", { required: true })}
            placeholder="Nombre"
          />
          <input
            className="styleInputs"
            type="text"
            name="lastName"
            {...register("lastName", { required: true })}
            placeholder="Apellido"
          />
        </div>
        <input
          className="styleInputs"
          type="email"
          name="email"
          {...register("email", { required: true })}
          placeholder="Email"
          required
        />
        <input
          className="styleInputs"
          type="password"
          {...register("password", { required: true })}
          placeholder="Contraseña"
        />
        <input
          className="styleInputs"
          type="password"
          {...register("passwordConfirm", { required: true })}
          required
          placeholder="Ingrese Nuevamente su contraseña"
        />
        <input
          className="styleInputs"
          type="date"
          {...register("birthdate", { required: true })}
        />
        <div className="relative rounded-xl ">
          <select
            className="styleInputs appearance-none w-full"
            {...register("gender", { required: true })}
          >
            <option value="" disabled>
              Genero
            </option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
            <option value="35 tipos de Gey">35 Tipos de Gey</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-8-8-1 1 9 9 9-9-1-1-8 8z" />
            </svg>
          </div>
        </div>
        <button
          className="bg-red-900 h-12 rounded-3xl hover:bg-red-950"
          type="submit"
        >
          Registrarse
        </button>
      </form>
      <p>
        ¿Ya tienes una cuenta?{" "}
        <button onClick={handleActivate}>
          <strong>Inicia Seción</strong>
        </button>{" "}
      </p>
    </div>
  );
}

export default Register;
