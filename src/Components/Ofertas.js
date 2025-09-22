import { useState, useEffect } from "react";
import Card from "../Commons/Card";
import "../Style/Home.css";
import "../Style/Ofertas.css";

const Ofertas = () => {
    const [loading, setLoading] = useState(false);
    const [ofertas, setOfertas] = useState([
        // Productos en oferta con descuentos
        {
            _id: "of1",
            titulo: "Camiseta Barcelona Messi #10",
            descripcion: "Camiseta oficial del FC Barcelona con el número 10 de Messi. Edición especial.",
            precioOriginal: 129.99,
            precio: 89.99,
            descuento: 31,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Remeras",
            deporte: "Fútbol",
            equipo: "FC Barcelona",
            stock: 15
        },
        {
            _id: "of2",
            titulo: "Zapatillas Nike Air Jordan 1",
            descripcion: "Zapatillas clásicas Nike Air Jordan 1 en color rojo y negro.",
            precioOriginal: 199.99,
            precio: 149.99,
            descuento: 25,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Zapatillas",
            deporte: "Basquet",
            equipo: "Chicago Bulls",
            stock: 8
        },
        {
            _id: "of3",
            titulo: "Buzo Real Madrid",
            descripcion: "Buzo oficial del Real Madrid con escudo bordado.",
            precioOriginal: 159.99,
            precio: 119.99,
            descuento: 25,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Buzos",
            deporte: "Fútbol",
            equipo: "Real Madrid",
            stock: 12
        },
        {
            _id: "of4",
            titulo: "Camiseta Lakers LeBron James #6",
            descripcion: "Camiseta oficial de Los Angeles Lakers con el número 6 de LeBron James.",
            precioOriginal: 109.99,
            precio: 79.99,
            descuento: 27,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Remeras",
            deporte: "Basquet",
            equipo: "Los Angeles Lakers",
            stock: 20
        },
        {
            _id: "of5",
            titulo: "Shorts Golden State Warriors",
            descripcion: "Shorts oficiales de los Golden State Warriors, material transpirable.",
            precioOriginal: 79.99,
            precio: 59.99,
            descuento: 25,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Shorts",
            deporte: "Basquet",
            equipo: "Golden State Warriors",
            stock: 18
        },
        {
            _id: "of6",
            titulo: "Camiseta Argentina Mundial 2022",
            descripcion: "Camiseta oficial de la Selección Argentina campeona del mundo 2022.",
            precioOriginal: 149.99,
            precio: 99.99,
            descuento: 33,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Remeras",
            deporte: "Fútbol",
            equipo: "Selección Argentina",
            stock: 25
        },
        {
            _id: "of7",
            titulo: "Buzo Manchester United",
            descripcion: "Buzo oficial del Manchester United con tecnología Dri-FIT.",
            precioOriginal: 139.99,
            precio: 104.99,
            descuento: 25,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Buzos",
            deporte: "Fútbol",
            equipo: "Manchester United",
            stock: 14
        },
        {
            _id: "of8",
            titulo: "Zapatillas Adidas Ultraboost",
            descripcion: "Zapatillas running Adidas Ultraboost con tecnología Boost.",
            precioOriginal: 179.99,
            precio: 134.99,
            descuento: 25,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Zapatillas",
            deporte: "Running",
            equipo: "Adidas",
            stock: 22
        },
        {
            _id: "of9",
            titulo: "Camiseta Brasil Copa América",
            descripcion: "Camiseta oficial de Brasil para la Copa América 2024.",
            precioOriginal: 119.99,
            precio: 79.99,
            descuento: 33,
            imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
            categoria: "Remeras",
            deporte: "Fútbol",
            equipo: "Selección Brasil",
            stock: 16
        }
    ]);

    const [filtroCategoria, setFiltroCategoria] = useState("Todas");
    const [filtroDeporte, setFiltroDeporte] = useState("Todos");
    const [ordenar, setOrdenar] = useState("descuento");

   

    // Filtrar ofertas
    const ofertasFiltradas = ofertas.filter(oferta => {
        const cumpleCategoria = filtroCategoria === "Todas" || oferta.categoria === filtroCategoria;
        const cumpleDeporte = filtroDeporte === "Todos" || oferta.deporte === filtroDeporte;
        return cumpleCategoria && cumpleDeporte;
    });

    // Ordenar ofertas sin agrupación
    const ofertasOrdenadas = [...ofertasFiltradas].sort((a, b) => {
        switch (ordenar) {
            case "descuento":
                return b.descuento - a.descuento;
            case "precio-asc":
                return a.precio - b.precio;
            case "precio-desc":
                return b.precio - a.precio;
            case "nombre":
                return a.titulo.localeCompare(b.titulo);
            default:
                return 0;
        }
    });

    const categorias = ["Todas", ...new Set(ofertas.map(oferta => oferta.categoria))];
    const deportes = ["Todos", ...new Set(ofertas.map(oferta => oferta.deporte))];

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Cargando ofertas...</p>
            </div>
        );
    }

    return (
        <div className="home-container">
            <div className="ofertas-header">
                <h1 className="ofertas-title">🔥 Ofertas Especiales 🔥</h1>
                <p className="ofertas-subtitle">
                    ¡Aprovecha estos descuentos increíbles por tiempo limitado!
                </p>
            </div>

            {/* Filtros y ordenamiento */}
            <div className="filters-container">
                <div className="filter-group">
                    <label htmlFor="categoria-filter">Categoría:</label>
                    <select 
                        id="categoria-filter"
                        value={filtroCategoria} 
                        onChange={(e) => setFiltroCategoria(e.target.value)}
                        className="filter-select"
                    >
                        {categorias.map(categoria => (
                            <option key={categoria} value={categoria}>{categoria}</option>
                        ))}
                    </select>
                </div>

                <div className="filter-group">
                    <label htmlFor="deporte-filter">Deporte:</label>
                    <select 
                        id="deporte-filter"
                        value={filtroDeporte} 
                        onChange={(e) => setFiltroDeporte(e.target.value)}
                        className="filter-select"
                    >
                        {deportes.map(deporte => (
                            <option key={deporte} value={deporte}>{deporte}</option>
                        ))}
                    </select>
                </div>

                <div className="filter-group">
                    <label htmlFor="ordenar-filter">Ordenar por:</label>
                    <select 
                        id="ordenar-filter"
                        value={ordenar} 
                        onChange={(e) => setOrdenar(e.target.value)}
                        className="filter-select"
                    >
                        <option value="descuento">Mayor descuento</option>
                        <option value="precio-asc">Precio: menor a mayor</option>
                        <option value="precio-desc">Precio: mayor a menor</option>
                        <option value="nombre">Nombre A-Z</option>
                    </select>
                </div>
            </div>

            

            {/* Grid de productos en oferta */}
            <div className="products-grid">
                {ofertasOrdenadas.map((oferta) => (
                    <div key={oferta._id} className="oferta-card-wrapper">
                        <div className="discount-badge">
                            -{oferta.descuento}%
                        </div>
                        <div className="price-comparison">
                            <span className="original-price">${oferta.precioOriginal}</span>
                            <span className="discounted-price">${oferta.precio}</span>
                        </div>
                        
                        <Card data={oferta} esFavorito={false} />
                    </div>
                ))}
            </div>

            {ofertasOrdenadas.length === 0 && (
                <div className="no-results">
                    <h3>No se encontraron ofertas</h3>
                    <p>Intenta cambiar los filtros para ver más productos.</p>
                </div>
            )}

            {/* Banner promocional */}
            <div className="promo-banner">
                <h3>🎉 ¡Ofertas por tiempo limitado! 🎉</h3>
                <p>Aprovecha estos descuentos especiales antes de que se agoten.</p>
                <small>* Válido hasta agotar stock. Precios sujetos a cambios sin previo aviso.</small>
            </div>
        </div>
    );
};

export default Ofertas;
