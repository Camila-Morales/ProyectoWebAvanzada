import NavbarProfile from "../components/organismos/NavbarProfile";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PageEdit() {
  const { user } = useAuth();
  const {userName}=useParams();
  const { register, handleSubmit } = useForm();
  const navigate=useNavigate();
  const OnSubmit = handleSubmit(async (values) => {
    axios
        .put(`http://localhost:2025/api/user/edit/${userName}`, values)
        .then((res) => {
          console.log(res.data);
        });
        navigate('/profile');
  });
  const [userProfile, setUserProfile] = useState("");
  //user nos esta devolviendo el username UNICO
  useEffect(() => {
    //llamo a todos los datos de los usaurio del perfil
    axios.get(`http://localhost:2025/api/user/${userName}`).then((res) => {
      setUserProfile(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <NavbarProfile userName={user.userName} />
      <form
        onSubmit={OnSubmit}
        className="flex flex-col h-96 gap-3 justify-center rounded-lg p-6 bg-fuchsia-950 relative"
      >
        <h1 className="absolute top-11 text-white left-40  text-2xl">Actulizar Datos</h1>
        <div className="flex gap-5 jus">
          <input
            className="styleInputs text-white"
            type="text"
            {...register("name", { required: true })}
            value={userProfile.name}
          />
          <input
            className="styleInputs text-white"
            type="text"
            name="lastName"
            {...register("lastName", { required: true })}
            value={userProfile.lastName}
          />
        </div>
        <input
          className="styleInputs text-white"
          type="email"
          name="email"
          {...register("email", { required: true })}
          value={userProfile.email}
          required
        />
         <div className="relative rounded-xl text-white ">
          <select
            className="styleInputs appearance-none w-full"
            {...register("plan", { required: true })}
          >
            <option value="" disabled>
              Plan
            </option>
            <option value="1">PLATINUM FIT</option>
                <option value="2">GOLD PERFORMANCE</option>
                <option value="3">ELITE WELLNESS</option>
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
          className="bg-red-900 h-12 rounded-3xl hover:bg-red-950 text-white"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default PageEdit;
