import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppI from "./Pages/AppPage.jsx";
import Login from "./Pages/LoginPage.jsx";
import Profile from "./Pages/ProfilePage.jsx";
import ProtectedRout from "./ProtectedRout.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import PlanCompra from "./Pages/CompraPlan.jsx";
import Historial from "./Pages/HistorialAsistencia.jsx";

import PageEdit from "./Pages/PageEdit.jsx";
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppI />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRout />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/compra" element={<PlanCompra/>}/>
              <Route path="/edit/:userName" element={<PageEdit/>}/>
              <Route path="/historial" element={<Historial/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
