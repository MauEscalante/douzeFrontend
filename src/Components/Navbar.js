
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/navbar.css"
import Search from "../Commons/Search";
import douze from "../assets/douze.png"; 


const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [categoryDropDown, setCategoryDropdown] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const categories = [
        "Remeras",
        "Camperas",
        "Short",
        "Buzos",
        "Gorras"
    ];


    const handleLogoClick = () => {
        try {
            navigate("/");
        } catch (error) {
            console.error('Error al manejar el clic en el logo:', error);
        }

    };

    const toggleCategoryDropdown = () => {
        setCategoryDropdown(!categoryDropDown);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleProfileClick = () => {
        setIsDropdownOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-vertical">
            <div className="container-fluid navbar-top-row">
                <Link to="/" className="navbar-brand" onClick={handleLogoClick}>
                    <div className="logo">
                        <img src={douze} alt="Douze Logo" className="logo-icon" />
                    </div>
                </Link>

                <div className="search-container">
                    <Search />
                </div>

                <div className="cart-container">
                    <button className="cart-button">
                        <div className="cart-icon">
                            🛒
                        </div>
                        <span className="cart-count">0</span>
                    </button>
                </div>
            </div>

            <div className="navbar-bottom-row">
                <form className="d-flex form-log" role="search">
                   
                    <button
                        className="btn btn-outline-info login-button"
                        type="button"
                        onClick={toggleDropdown}
                    >
                        <p>Ofertas</p>
                    </button>
                    <button
                        className="btn btn-outline-info login-button"
                        type="button"
                        onClick={toggleDropdown}
                    >
                        <p>Zonas de retiro</p>
                    </button>
                     <button
                        className="btn btn-outline-info login-button"
                        type="button"
                        onClick={toggleDropdown}
                    >
                        <p>Historial</p>
                    </button>
                    {user ? (
                        <>
                            <div className="dropdown contenedor-menu-log">
                                <button
                                    className="btn btn-secondary"
                                    type="button"
                                    onClick={toggleDropdown}
                                >
                                    <p>Perfil</p>
                                </button>
                                {isDropdownOpen && (
                                    <ul className="dropdown-menu show">
                                        <li>
                                            <Link to={"/profile"} className="dropdown-item" onClick={handleProfileClick}>
                                                Perfil
                                            </Link>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" onClick={console.log("Favioritos")}>
                                                Favoritos
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" onClick={console.log("logout")}>
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                )}

                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="btn btn-outline-info login-button" type="submit">
                                    <p>Ingresar</p>
                                </button>
                            </Link>
                        </>
                    )}
                </form>
            </div>

        </nav >

    );
};

export default Navbar;