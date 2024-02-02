import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Login({ registerF }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuth,errors:AuthError} = useAuth();
  const navigate = useNavigate();
  const handleActivate = (e) => {
    e.preventDefault();
    registerF();
  };
  const onSubmit = handleSubmit((value) => {
    signup(value);
  });
  useEffect(() => {
    if (isAuth) navigate("/profile");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);
  return (
    <div className=" relative w-[28rem] h-[30rem] text-white bg-red-700 flex flex-col  gap-5 justify-center items-center ">
      {
        AuthError.map((err,i)=>(
          <div key={i} className="absolute top-0 text-center bg-red-500 p-1 w-full text-white">
            {err}
          </div>
        ))
      }
      <h1 className="absolute top-9 text-center">
        <strong className="text-xl">Iniciar Seción</strong>
        <hr className="w-[15rem]" />
      </h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <label htmlFor="userName">Usuario</label>
          <input
            className="styleInputs"
            type="text"
            id="userName"
            {...register("userName", { required: true })}
          />
          {
            errors.userName &&(<p className="absolute top-[10rem] text-blue-950">
              UserName is Required
            </p>)
          }
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="passw">Contraseña</label>
          <input
            className="styleInputs"
            type="password"
            id="passw"
            {...register("password", { required: true })}
          />
          {
            errors.password &&(<p className="absolute top-[17rem] text-blue-950">
              Password is Required
            </p>)
          }
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
