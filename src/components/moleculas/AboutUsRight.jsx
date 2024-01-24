import AboutUsH1 from "../atomos/AboutUsH1";
import Paragraph from "../atomos/Paragraph";

function AboutUsRight() {
  return (
    <>
      <div className="text-4xl font-bold text-center mb-4">
        <AboutUsH1 />
      </div>

      <div className="mb-4">
        <Paragraph
          styles={"text-xl italic text-justify"}
          texto="En GYM R.A.T, nos enorgullece ser más que un gimnasio; somos una comunidad comprometida con la excelencia en el fitness y el bienestar. Nuestras instalaciones de última generación ofrecen un entorno propicio para el crecimiento personal, respaldado por entrenadores altamente calificados y programas personalizados que se adaptan a tus metas individuales. Valoramos la camaradería y la motivación, creando un ambiente donde los miembros se inspiran mutuamente a alcanzar nuevos niveles de salud y rendimiento."
        />
      </div>
    </>
  );
}

export default AboutUsRight;