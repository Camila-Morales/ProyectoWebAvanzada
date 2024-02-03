import Testimonio from "../moleculas/Testimonio";
import fondo from "/fondo_Testimonios.jpg";
import data from "../../utils/Testimonios.json";
import Carousel from "../moleculas/Carousel";

function Testimonios() {
 
  return (
    <div
      className={`w-full h-screen  flex flex-col justify-center items-center relative overflow-hidden text-white`}
      id="testimonios"
    >
      <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-4">
        TESTIMONIOS
      </h1>
      <strong className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-4">{`"`}</strong>
        <Carousel>
        {
          data.map((items,id)=>(
              <Testimonio
              key={id}
              id={id}
              texto={items.testimonio}
              dirImg={items.avatar}
              altImg={items.alt}
              plan={items.plan}
              avatarName={items.name}
            />
          )) 
        }
        </Carousel>
      <img src={fondo} className="absolute w-full h-full object-cover -z-10" />
      <div className="absolute w-full h-full object-cover bg-black opacity-70 -z-10"></div>
    </div>
  );
}

export default Testimonios;
