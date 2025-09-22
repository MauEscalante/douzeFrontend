import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login.js";
import Navbar from "./Components/Navbar.js";
import Register from "./Components/Register.js";

const App = () => {
    return (
        <>
            { <Navbar />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
};


      
export default App;