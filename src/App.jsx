import TestimonioImgP from "./components/moleculas/TestimonioImgP"

function App() {
  let parrafo="Quiero expresar mi gratitud hacia GYM RAT por haber transformado mi vida de una manera que nunca imaginé. Antes de unirme, me encontraba en una rutina sedentaria y me sentía sin energía. Sin embargo, desde el momento en que ingresé a este gimnasio, todo cambió";
  let imgaDir= "https://sm.ign.com/t/ign_es/screenshot/default/avatarjpg-b21b3a_125372_6bdh.1280.jpg";
  let Alt="Imagen Avatar";
  let name= "Camila";
  let plan= "Mamadisima"

  return (
    <>
      <h1>SOY APP PRINCIPAL</h1>
      <TestimonioImgP texto={parrafo}  dirImg={imgaDir} altImg={Alt} avatarName= {name} plan={plan}/>
    </>
  )
}

export default App
