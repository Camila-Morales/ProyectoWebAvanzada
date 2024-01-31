import fondo from "/email.jpg";

function Email() {
    return (
        <div className={`w-full h-screen  flex flex-col justify-center items-center relative overflow-hidden text-white`}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-4">¿Quieres más información?</h1>
            <p className="text-3xl md:text-xl lg:text-2xl xl:text-3xl mb-4">{`Ingresa tu email y nuestro equipo se encargará de 
            comunicarse contigo y brindarte más información`}</p>
            <input type="email" value="user@email.com" disabled className="mt-1 block w-[500px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            mb-2
            "/>
            <button className="text-2xl bg-red-700 hover:bg-red-900 text-white rounded-xl p-2">
                Enviar
            </button>
            <img src={fondo} className="absolute w-full h-full object-cover -z-10" />
            <div className="absolute w-full h-full object-cover bg-black opacity-70 -z-10"></div>
        </div>
    );
}

export default Email;