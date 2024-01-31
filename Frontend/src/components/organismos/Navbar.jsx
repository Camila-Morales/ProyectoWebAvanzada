import { useState } from "react";
import { HiHome, HiDevicePhoneMobile , HiStar, } from "react-icons/hi2";
import { HiAnnotation, HiOutlinePlus, HiDotsVertical } from "react-icons/hi";
import NavbarItem from "../moleculas/NavbarItem";
import logo from "../../../public/logo_white.png";
import { RxAvatar } from "react-icons/rx";

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        { name: "Home", icon: HiHome },
        { name: "About Us", icon: HiStar },
        { name: "Contact", icon: HiDevicePhoneMobile },
        { name: "Testimonios", icon: HiAnnotation  },
        { name: "Planes", icon: HiOutlinePlus },
    ];
    return (        
        <div className="flex items-center justify-between fixed w-full z-40 h-14 bg-zinc-900 p-5">
            <div className="flex items-center gap-8">
                <img src={logo} className="w-[80px] md:w-[115px] object-cover mr-60 ml-10"/>
                <div className="hidden md:flex gap-8">
                    {menu.map((item, index) => (
                        <NavbarItem key={index} name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className="flex md:hidden gap-5">
                    {menu.map((item, index) => index < 3 && (
                        <NavbarItem key={index} name={""} Icon={item.icon} />
                    ))}
                </div>
                <div className="md:hidden" onClick={()=>setToggle(!toggle)}>                    
                    <NavbarItem name={""} Icon={HiDotsVertical} />                    
                    {toggle?<div className="absolute right-5 mt-3 bg-zinc-900 border-[1px] p-3">
                        {menu.map((item, index) => index >= 3 && (
                            <NavbarItem key={index} name={item.name} Icon={item.icon} />
                        ))}
                    </div>:null}
                </div>
            </div>
            <div className="text-white text-[40px] font-semibold cursor-pointer">
                <RxAvatar />
            </div>
        </div>
    );
}

export default Navbar;