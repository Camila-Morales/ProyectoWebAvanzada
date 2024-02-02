import { BrowserRouter,Routes,Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import AppI from "./Pages/AppPage.jsx";
import Login from "./Pages/LoginPage.jsx";
import Profile from "./Pages/ProfilePage.jsx";
import ProtectedRout from "./ProtectedRout.jsx";

function App() {
  return (
    <>
          <AuthProvider>
              <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<AppI/>}/>
                    <Route path="/login" element={<Login/>}/>

                    <Route element={<ProtectedRout/>}>
                      <Route path="/profile" element={<Profile/>}/>
                    </Route>
                  </Routes>
              </BrowserRouter>
          </AuthProvider>
    </>
  );
}

export default App;
