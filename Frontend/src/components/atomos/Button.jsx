function Button({text,dir}) {
    return ( <div className="border m-auto hover:bg-red-600 cursor-pointer w-1/3 rounded-md text-white  bg-red-500">
        <a href={dir} >{text}</a>   
    </div> );
}

export default Button;