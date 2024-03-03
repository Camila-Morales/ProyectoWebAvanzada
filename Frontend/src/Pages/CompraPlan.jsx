import NavbarProfile from "../components/organismos/NavbarProfile";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/organismos/Card";

function PlanCompra() {
  const { user } = useAuth();
  const [datosF, setDatosF] = useState({
    adress: "",
    codPosta: "",
    plan: 0,
  });
  const handleInputChange = (e) => {
    setDatosF({
      ...datosF,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocusChange = (e) => {
    setDatosF({
      ...datosF,
      focus: e.target.name,
    });
  };
  const [userProfile, setUserProfile] = useState("");
  useEffect(() => {
    //llamo a todos los datos de los usaurio del perfil
    axios.get(`http://localhost:2025/api/user/${user.userName}`).then((res) => {
      setUserProfile(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <NavbarProfile />
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex w-full justify-center items-center flex-wrap pt-5">
          <form className="p-10 rounded-s-2xl flex flex-col  justify-center items-center text-cyan-50 w-[50rem] bg-slate-900 h-[32.7rem] gap-5">
            <h1 className="text-5xl">FACTURA</h1>
            <div className="flex w-full justify-between flex-wrap  items-center">
              <input
                className="styleInputs text-center"
                type="text"
                name="nombre"
                value={userProfile.name}
                disabled
              />
              <input
                className="styleInputs text-center"
                type="text"
                name="lastName"
                value={userProfile.lastName}
                disabled
                required
              />
              <input
                className="styleInputs text-center"
                type="text"
                name="adress"
                placeholder="Direcion"
                required
                onChange={handleInputChange}
                onFocus={handleFocusChange}
              />
            </div>
            <input
              className="styleInputs w-full text-center"
              type="email"
              name="email"
              value={userProfile.email}
              disabled
              required
            />
            <input
              className="styleInputs w-full text-center"
              type="text"
              name="codPosta"
              placeholder="Cod-Postal"
              onChange={handleInputChange}
              onFocus={handleFocusChange}
              required
            />
            <input
              className="styleInputs w-full "
              type="texto"
              name="Genero"
              value={userProfile.gender}
              disabled
              required
            />
            <div className="relative rounded-xl w-full">
              <select
                className="styleInputs appearance-none w-full"
                name="plan"
                onChange={handleInputChange}
                onFocus={handleFocusChange}
              >
                <option value="" >
                  Seleccione un Plan
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
          </form>
          <Card dataFactura={datosF}/>
        </div>
      </div>
    </div>
  );
}

export default PlanCompra;
