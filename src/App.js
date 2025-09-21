import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar.js";

const App = () => {
    return (
        <>
            { <Navbar />}
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    );
};


      
export default App;