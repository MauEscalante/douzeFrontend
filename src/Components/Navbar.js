
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/navbar.css"
import Search from "../Commons/Search";
import douze from "../assets/douze.png"; 


const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

    

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleProfileClick = () => {
        setIsDropdownOpen(false);
    };

    const navigateToHistory = () => {
        navigate("/historial");
    };

    const navigateToRetiro = () => {
        navigate("/retiro");
    };

    const navigateToOfertas = () => {
        navigate("/ofertas");
    }

    const navigateToContacto = () => {
        navigate("/contacto");
    }

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
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" alt="cart"><g fill="none" fill-rule="evenodd"><g fill="currentcolor"><path d="M9.1 17.84l-1.598-7.39h16.127l-2.452 7.39H9.1zm11.994 6.274c0 .508-.395.922-.883.922-.487 0-.884-.414-.884-.922 0-.51.397-.924.884-.924.488 0 .883.414.883.924zm-11.977.922c-.487 0-.884-.414-.884-.922 0-.51.397-.924.884-.924s.883.414.883.924c0 .508-.396.922-.883.922zm13.362-6.104l2.997-9.034c.084-.251.046-.53-.103-.746-.146-.216-.385-.346-.64-.346H7.147L6.132 4.12c-.08-.375-.399-.64-.767-.64H1.946c-.434 0-.786.367-.786.822 0 .453.352.822.786.822h2.791l3.584 16.573c-.962.347-1.66 1.294-1.66 2.417 0 1.415 1.102 2.566 2.456 2.566 1.355 0 2.456-1.15 2.456-2.566 0-.327-.064-.636-.171-.924h6.524c-.107.288-.171.597-.171.924 0 1.415 1.102 2.566 2.456 2.566 1.355 0 2.456-1.15 2.456-2.566s-1.101-2.568-2.456-2.568c-.044 0-.085.013-.128.015-.022-.002-.042-.015-.064-.015H9.902l-.446-2.062h12.28c.335 0 .634-.222.743-.552z"></path></g></g></svg>
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
                        onClick={navigateToOfertas}
                    >
                        <p>Ofertas</p>
                    </button>
                    <button
                        className="btn btn-outline-info login-button"
                        type="button"
                        onClick={navigateToRetiro}
                    >
                        <p>Zonas de retiro</p>
                    </button>
                     <button
                        className="btn btn-outline-info login-button"
                        type="button"
                        onClick={navigateToHistory}
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
                    <button
                        className="btn btn-outline-info login-button"
                        type="button"
                        onClick={navigateToContacto}
                    >
                        <p>Contacto</p>
                    </button>
                </form>
            </div>

        </nav >

    );
};

export default Navbar;