import { useState } from "react";
import Card from "../Commons/Card";
import "../Style/Home.css";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([
        // NBA
        {
            _id: "1",
            titulo: "Camiseta Lakers Kobe Bryant #24",
            descripcion: "Camiseta oficial de Los Angeles Lakers con el número 24 de Kobe Bryant.",
            precio: 89.99,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Remeras",
            deporte: "Basquet",
            equipo: "Los Angeles Lakers"
        },
        {
            _id: "2",
            titulo: "Buzo Golden State Warriors",
            descripcion: "Camiseta oficial de Los Angeles Lakers con el número 24 de Kobe Bryant.",
            precio: 124.99,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Buzos",
            deporte: "Basquet",
            equipo: "Golden State Warriors"
        },
        {
            _id: "3",
            titulo: "Gorra Chicago Bulls",
            descripcion: "Camiseta oficial de Los Angeles Lakers con el número 24 de Kobe Bryant.",
            precio: 34.99,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Gorras",
            deporte: "Basquet",
            equipo: "Chicago Bulls"
        },
        {
            _id: "4",
            titulo: "Short Miami Heat",
            descripcion: "Camiseta oficial de Los Angeles Lakers con el número 24 de Kobe Bryant.",
            precio: 54.99,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Short",
            deporte: "Basquet",
            equipo: "Miami Heat"
        },
        
        // Fútbol
        {
            _id: "5",
            titulo: "Camiseta Real Madrid Benzema #9",
            descripcion: "Camiseta oficial de Los Angeles Lakers con el número 24 de Kobe Bryant.",
            precio: 94.99,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Remeras",
            deporte: "Futbol",
            equipo: "Real Madrid"
        },
        {
            _id: "6",
            titulo: "Camiseta Barcelona Messi #10",
            descripcion: "Camiseta oficial de Los Angeles Lakers con el número 24 de Kobe Bryant.",
            precio: 99.99,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Remeras",
            deporte: "Futbol",
            equipo: "FC Barcelona"
        },
        {
            _id: "7",
            titulo: "Campera Manchester United",
            descripcion: "Camiseta oficial de Los Angeles Lakers con el número 24 de Kobe Bryant.",
            precio: 139.99,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Camperas",
            deporte: "Futbol",
            equipo: "Manchester United"
        },
        {
            _id: "8",
            titulo: "Buzo PSG Mbappe",
            descripcion: "Camiseta oficial de Los Angeles Lakers con el número 24 de Kobe Bryant.",
            precio: 109.99,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Buzos",
            deporte: "Futbol",
            equipo: "Paris Saint-Germain"
        },
        
        // NFL
        {
            _id: "9",
            titulo: "Jersey Patriots Tom Brady #12",
            descripcion: "Camiseta oficial de Los Angeles Lakers con el número 24 de Kobe Bryant.",
            precio: 149.99,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Remeras",
            deporte: "NFL",
            equipo: "New England Patriots"
        },
        {
            _id: "10",
            titulo: "Buzo Green Bay Packers",
            descripcion: "Camiseta oficial de Los Angeles Lakers con el número 24 de Kobe Bryant.",
            precio: 119.99,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Buzos",
            deporte: "NFL",
            equipo: "Green Bay Packers"
        },
        {
            _id: "11",
            titulo: "Gorra Dallas Cowboys",
            descripcion: "Camiseta oficial de Los Angeles Lakers con el número 24 de Kobe Bryant.",
            precio: 39.99,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Gorras",
            deporte: "NFL",
            equipo: "Dallas Cowboys"
        },
        {
            _id: "12",
            titulo: "Campera Kansas City Chiefs",
            descripcion: "Camiseta oficial de Los Angeles Lakers con el número 24 de Kobe Bryant.",
            precio: 159.99,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Camperas",
            deporte: "NFL",
            equipo: "Kansas City Chiefs"
        },
        
        // MLB
        {
            _id: "13",
            titulo: "Jersey New York Yankees #99",
            descripcion: "Camiseta oficial de Los Angeles Lakers con el número 24 de Kobe Bryant.",
            precio: 104.99,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Remeras",
            deporte: "MLB",
            equipo: "New York Yankees"
        },
        {
            _id: "14",
            titulo: "Gorra Boston Red Sox",
            descripcion: "Camiseta oficial de Los Angeles Lakers con el número 24 de Kobe Bryant.",
            precio: 29.99,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Gorras",
            deporte: "MLB",
            equipo: "Boston Red Sox"
        },
        {
            _id: "15",
            titulo: "Buzo Los Angeles Dodgers",
            descripcion: "Camiseta oficial de Los Angeles Lakers con el número 24 de Kobe Bryant.",
            precio: 89.99,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Buzos",
            deporte: "MLB",
            equipo: "Los Angeles Dodgers"
        },
        {
            _id: "16",
            titulo: "Campera San Francisco Giants",
            descripcion: "Camiseta oficial de Los Angeles Lakers con el número 24 de Kobe Bryant.",
            precio: 129.99,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Camperas",
            deporte: "MLB",
            equipo: "San Francisco Giants"
        }
    ]);
    const [value, setValue] = useState(''); // Agregar este estado

    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 100,
            label: '100k',
        },
    ];


    // Agregar esta función
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const obtenerProductos = async (page) => {

        setLoading(true);
        setProducts([]);
    };

    return (
        <div className="home-layout">
            {/* Banner izquierdo */}
            <div className="left-options">
                <div className="banner">
                    <h3 aria-level="3" className="title">Categorías</h3>
                    <ul>
                        <li >
                            <span className="custom-form-label">Remeras</span>
                        </li>
                        <li >
                            <span className="custom-form-label">Camperas</span>
                        </li>
                        <li >
                            <span className="custom-form-label">Short</span>
                        </li>
                        <li >
                            <span className="custom-form-label">Buzos</span>
                        </li>
                        <li >
                            <span className="custom-form-label">Gorras</span>
                        </li>
                    </ul>
                </div>
                <div className="banner">
                    <h3 aria-level="3" className="title">Deporte</h3>
                    <ul>
                        <li >
                            <span className="custom-form-label">Basquet</span>
                        </li>
                        <li >
                            <span className="custom-form-label">Futbol</span>
                        </li>
                        <li >
                            <span className="custom-form-label">NFL</span>
                        </li>
                        <li >
                            <span className="custom-form-label">MLB</span>
                        </li>
                    </ul>
                </div>
                <div className="banner">
                    <h3 aria-level="3" className="title">Talle</h3>
                    <ul>
                        <li >
                            <span className="custom-form-label">XL</span>
                        </li>
                        <li >
                            <span className="custom-form-label">L</span>
                        </li>
                        <li >
                            <span className="custom-form-label">M</span>
                        </li>
                        <li >
                            <span className="custom-form-label">S</span>
                        </li>
                    </ul>
                </div>
                <div className="banner">
                    <h3 aria-level="3" className="title">Filtro de Precio</h3>

                    <Box sx={{ width: 200 , marginTop:2}}>
                        <Slider
                            aria-label="Custom marks"
                            defaultValue={0}
                            step={1}
                            min={0}
                            max={100}
                            valueLabelDisplay="auto"
                            marks={marks}
                            sx={{
                                color: '#a8a8a8',
                                '& .MuiSlider-thumb': {
                                    backgroundColor: '#a8a8a8',
                                },
                                '& .MuiSlider-track': {
                                    backgroundColor: '#a8a8a8',
                                },
                                '& .MuiSlider-rail': {
                                    backgroundColor: '#a8a8a8',
                                    opacity: 0.3,
                                },
                            }}
                        />
                    </Box>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="main-content">
                <div className="container text-center">


                    <div className="contenedor-populars">
                        {products.length > 0 ? (
                            products.map((data, index) => (
                                <Card data={data} key={`${data._id}-${index}`} />
                            ))
                        ) : (
                            !loading && (
                                <p>
                                    No se encontraron productos que coincidan con la búsqueda.
                                </p>
                            )
                        )}

                        {/* Skeleton cards para carga inicial */}
                        {loading && (
                            <>
                                {[...Array(8)].map((_, index) => (
                                    <div key={`skeleton-${index}`} className="skeleton-card">
                                        <div className="skeleton-image"></div>
                                        <div className="skeleton-content">
                                            <div className="skeleton-store"></div>
                                            <div className="skeleton-title"></div>
                                            <div className="skeleton-title short"></div>
                                            <div className="skeleton-price"></div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>

                    {/* Indicador de carga para scroll infinito */}
                    {loading && (
                        <div className="loading-indicator">
                            <div className="loading-spinner"></div>
                            <p>Cargando más productos...</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Home;