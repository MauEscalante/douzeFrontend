import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login.js";
import Navbar from "./Components/Navbar.js";

const App = () => {
    return (
        <>
            { <Navbar />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
};


      
export default App;