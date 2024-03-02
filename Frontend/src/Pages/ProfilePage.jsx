import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import NavbarProfile from "../components/organismos/NavbarProfile";
import Planes from "../components/organismos/planes";

function Profile() {
  const { user } = useAuth();
  //guardo datos del datos
  const [userProfile, setUserProfile] = useState("");
  //user nos esta devolviendo el username UNICO
  useEffect(() => {
    //llamo a todos los datos de los usaurio del perfil
    axios.get(`http://localhost:2025/api/user/${user.userName}`).then((res) => {
      setUserProfile(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <NavbarProfile userName={user.userName} />
      <div className="w-full flex justify-center items-center flex-col gap-4 mt-5 mb-5">
        <h1 className="text-7xl">Bienvenido 👋</h1>
        <h2 className="text-3xl">
          {userProfile.name} {userProfile.lastName}
        </h2>
      </div>
      {userProfile.plan === 0 ? (
        <div>
          <div className="flex justify-center items-center flex-col mt-5 mb-5">
            <p className="text-center font-semibold">
              ¡Empieza a disfrutar de los beneficios de un plan! <br />
              Desbloquea todoel potencial de tu cuenta con un plan
              personalizado. <br />
              Aprovecha almáximo tu experiencia con un plan a tu medida.
            </p>
          </div>
          <Planes />
        </div>
      ) : null}
      {userProfile.plan >= 1 ? (
        <div>
          {/*de aqui en eadelante se agrega LOS DEMAS "COMPONENTES"  */}
            <h1>Tiene Almenos Un plan</h1>
        </div>
      ) : null}
    </>
  );
}

export default Profile;
