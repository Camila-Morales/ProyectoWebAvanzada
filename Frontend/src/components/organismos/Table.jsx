import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Table() {
  const [data, setData] = useState([]);
  const [acum, setAcum] = useState(0);
  const navigate = useNavigate();

  const editbutton = (value) => {
    navigate(`/edit/${value}`);
  };

  const deletebutton = (value) => {
    axios.delete(`http://localhost:2025/api/user/${value}`).then((res)=>console.log(res.value));
    axios.delete(`http://localhost:2025/api/delete/${value}`).then((res)=>console.log(res.value));
  };

  useEffect(() => {
    axios.get("http://localhost:2025/api/user").then((response) => {
      setData(response.data);

      // Calculate total price
      let totalPrice = 0;
      response.data.forEach((item) => {
        if (item.plan === 1) {
          totalPrice += 30;
        } else if (item.plan === 2) {
          totalPrice += 50;
        } else if (item.plan === 3) {
          totalPrice += 100;
        }
      });
      setAcum(totalPrice);
    });
  }, [data]);
  return (
    <div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Nombre</th>
            <th className="px-4 py-2 text-left">Apellido</th>
            <th className="px-4 py-2 text-left">UserName</th>
            <th className="px-4 py-2 text-left">Plan</th>
            <th className="px-4 py-2 text-left">email</th>
            <th className="px-4 py-2 text-left">Precio</th>
            <th className="px-4 py-2 text-left">Admin</th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            (item, key) =>
              item.name !== "Admin" && ( // Check if name is not "Admin"
                <tr key={key} className="border-b odd:bg-gray-100">
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.lastName}</td>
                  <td className="px-4 py-2">{item.userName}</td>
                  <td className="px-4 py-2">
                    {item.plan === 1 && "PLATINUM FIT"}
                    {item.plan === 2 && "GOLD PERFORMANCE"}
                    {item.plan === 3 && "ELITE WELLNESS"}
                  </td>
                  <td className="px-4 py-2">
                    {item.email}
                  </td>
                  <td className="px-4 py-2">
                    {item.plan === 1 && "$30"}
                    {item.plan === 2 && "$50"}
                    {item.plan === 3 && "$100"}
                  </td>
                  <td className="px-4 py-2 flex gap-9">
                    <button onClick={()=>editbutton(item.userName)}>
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button onClick={()=>deletebutton(item.userName)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
      <h1 className="text-3xl">Total: ${acum}</h1>
    </div>
  );
}

export default Table;
