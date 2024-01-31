
function NavbarItem({ name, Icon}) {
    return (
        <div className="text-white flex items-center gap-3 text-[20px] font-semibold cursor-pointer hover:underline underline-offset-8
        mb-2">
            <Icon />
            <p className="">{name}</p>
        </div>
    );
}

export default NavbarItem;