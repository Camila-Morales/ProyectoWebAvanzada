import { Link } from "react-router-dom";
import HeadProfile from "../moleculas/HeadProfile";
import logo from "/logo_white.png";

function NavbarProfile({ userName }) {
  return (
    <div className="flex justify-between bg-zinc-900 text-white p-2 fixed w-full top-0">
      <Link to={"/profile"}>
        <img src={logo} className="w-[80px] md:w-[7rem] object-cover" />
      </Link>

      <HeadProfile userName={userName} />
    </div>
  );
}

export default NavbarProfile;
