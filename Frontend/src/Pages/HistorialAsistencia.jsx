import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import NavbarProfile from "../components/organismos/NavbarProfile";
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

function Historial() {
  const { user } = useAuth();
  //guardo datos del datos
  const [userProfile, setUserProfile] = useState("");

  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });
  const [allEvents, setAllEvents] = useState(Events);

  const handleAddEvent = () => {
    setAllEvents((prevEvents) => [...prevEvents, newEvent]);
    setNewEvent({
      title: `${user.userName}`,
      start: currentDate,
      end: currentDate,
    });
  };

  useEffect(() => {
    //llamo a todos los datos de los usaurio del perfil
    axios
      .get(`http://localhost:2025/api/calendar/${user.userName}`)
      .then((res) => {
        setUserProfile(res.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <NavbarProfile userName={user.userName} />
      <h2 className="text-3xl">
        {userProfile.name} {userProfile.lastName}
      </h2>
      <div className="flex justify-center">
        <div className="w-10/12">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold">Historial de Asistencia</h1>
          </div>
          <button className="text-white font-bold py-2 px-4 rounded">
            Mostrar Historial
          </button>
          <div className="flex justify-center">
            <div className="w-10/12">
              <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Historial;
