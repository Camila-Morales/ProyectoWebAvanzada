import AboutUs from "../components/organismos/AboutUs";
import Email from "../components/organismos/Email";
import Home from "../components/organismos/Home";
import Navbar from "../components/organismos/Navbar";
import Testimonios from "../components/organismos/Testimonios";
import Planes from "../components/organismos/planes";


function App() {
    return (
        <div>
          <Navbar/>
          <Home />
          <AboutUs />  
          <Email />
          <Planes />    
          <Testimonios />
                
        </div>
      );
}

export default App;