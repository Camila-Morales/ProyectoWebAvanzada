import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import NavbarProfile from "../components/organismos/NavbarProfile";
// import Planes from "../components/organismos/planes";
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
  // const [eventCalendar, setEventCalendar] = useState([{}]);

  const [setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });
  const [allEvents, setAllEvents] = useState(Events);

  const handleAddEvent = async () => {
    try {
      const response = await fetch(
        `http://localhost:2025/api/calendar/${user.userName}`
      );
      const data = await response.json();

      // Map the fetched data to match the format expected by react-big-calendar
      const events = data.map((event) => ({
        title: event.userName,
        start: new Date(event.day),
        end: new Date(event.day),
      }));

      // Update the allEvents state with the fetched events
      setAllEvents([...allEvents, ...events]);

      // Reset the newEvent state
      setNewEvent({
        title: "",
        start: "",
        end: "",
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    //llamo a todos los datos de los usaurio del perfil
    axios.get(`http://localhost:2025/api/user/${user.userName}`).then((res) => {
      setUserProfile(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div  className="pt-28">
      <NavbarProfile userName={user.userName} />
      <h2 className="text-3xl">
        {userProfile.name} {userProfile.lastName}
      </h2>
      <div className="flex justify-center">
        <div className="w-10/12">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold">Historial de Asistencia</h1>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleAddEvent}
            >
              Mostrar Historial
            </button>
          </div>

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
