import TittlePlanes from "../atomos/tittlePlanes";
import CajaTittles from "../atomos/cajaTittles";

function planesUp() {
  const plan1 = ["Ingreso indefinido (puedes ir varias veces al día)", "Bailoterapia limitada", "Uso de maquinas ilimitadas"];

  const plan2 = ["Ingreso indefinido (puedes ir varias veces al día)", "Bailoterapia limitada", "Uso de maquinas ilimitadas", "Aguas ilimitadas"];

  const plan3 = ["Ingreso indefinido (puedes ir varias veces al día)", "Bailoterapia limitada", "Uso de maquinas ilimitadas", "Aguas ilimitadas", "Tarro de proteina mensual", "Entrenador personalizado", "Acceso a nutricionista personalizado", "Asignacion de locker", "Hoodie"];


  return (
    <div className="flex flex-col">
      <TittlePlanes />
      <div className="flex gap-5 m-3 max-md:flex-wrap">
        <CajaTittles texto={"PLATINUM FIT"} arregloPlan={plan1} precio={30} />
        <CajaTittles texto={"ELITE WELLNESS"} arregloPlan={plan3} precio={100} />
        <CajaTittles texto={"GOLD PERFORMANCE"} arregloPlan={plan2} precio={50} />
      </div>


    </div>
  );
}

export default planesUp;
