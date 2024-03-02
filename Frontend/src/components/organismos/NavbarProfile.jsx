import HeadProfile from "../moleculas/HeadProfile";
import logo from "/logo_white.png";

function NavbarProfile({ userName }) {
  return (
    <div className="flex justify-between bg-zinc-900 text-white p-2">
      <img src={logo} className="w-[80px] md:w-[7rem] object-cover" />
      <HeadProfile userName={userName} />
    </div>
  );
}

export default NavbarProfile;
