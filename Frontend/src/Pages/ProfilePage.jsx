import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import NavbarProfile from "../components/organismos/NavbarProfile";
import Planes from "../components/organismos/planes";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": import("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const Events = [
  {
    title: "",
    start: "",
    end: "",
  },
];

const currentDate = new Date();

function Profile() {
  const { user } = useAuth();
  //guardo datos del datos
  const [userProfile, setUserProfile] = useState("");
  //user nos esta devolviendo el username UNICO
  const [newEvent, setNewEvent] = useState({
    title: `${user.userName}`,
    start: currentDate,
    end: currentDate,
  });
  const [allEvents, setAllEvents] = useState(Events);

  const handleAddEvent = () => {
    setAllEvents((prevEvents) => [...prevEvents, newEvent]);
    setNewEvent({
      title: `${user.userName}`,
      start: currentDate,
      end: currentDate,
    });
    const body = {
      userName: user.userName,
      day: currentDate,
    };
    axios.post("http://localhost:2025/api/calendar", body);
  };

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
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddEvent}
        >
          Registrar Asistencia
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Historial de Asistencia
        </button>
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
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
          />
        </div>
      ) : null}
    </>
  );
}

export default Profile;
