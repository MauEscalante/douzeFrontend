import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login.js";
import Navbar from "./Components/Navbar.js";
import Register from "./Components/Register.js";
import Historial from "./Components/Historial.js";
import Retiro from "./Components/Retiro.js";
import Ofertas from "./Components/Ofertas.js";
import Footer from "./Commons/Footer.js";                            

const App = () => {
    return (
        <>
            { <Navbar />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/historial" element={<Historial />} />
                <Route path="/retiro" element={<Retiro/>} />
                <Route path="/ofertas" element={<Ofertas/>} />
            </Routes>
            <Footer />
        </>
    );
};


      
export default App;