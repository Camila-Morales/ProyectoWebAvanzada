import AboutUs from "./components/organismos/AboutUs";
import Home from "./components/organismos/Home";
import Navbar from "./components/organismos/Navbar";
import Testimonios from "./components/organismos/Testimonios";
import Planes from "./components/organismos/planes";


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutUs />  
      <Planes />    
      <Testimonios />      
    </>
  );
}

export default App;
