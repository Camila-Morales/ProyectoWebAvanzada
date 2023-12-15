import TestimonioImgP from "./components/moleculas/DescriptionTestimonio"
import Avatr from '/Avatar.jpg'

function App() {
  let parrafo="Quiero expresar mi gratitud hacia GYM RAT por haber transformado mi vida de una manera que nunca imaginé. Antes de unirme, me encontraba en una rutina sedentaria y me sentía sin energía. Sin embargo, desde el momento en que ingresé a este gimnasio, todo cambió";
  let Alt="Imagen Avatar";
  let name= "Camila";
  let plan= "Mamadisima"

  return (
    <>
      <h1>SOY APP PRINCIPAL</h1>
      <TestimonioImgP texto={parrafo}  dirImg={Avatr} altImg={Alt} avatarName= {name} plan={plan}/>
    </>
  )
}

export default App
