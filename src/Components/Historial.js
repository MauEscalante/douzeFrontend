import { Skeleton } from '@mui/material';
import "../Style/Historial.css";
import { useState } from 'react';

const Historial = () => {

    const [loading, setLoading] = useState(false);

    const compras = [
        {
            id: "123456",
            fecha: "2023-10-01",
            productos: [
                {
                    id: "prod1",
                    imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
                    nombre: "Camiseta MLB",
                    cantidad: 2,
                    precioUnitario: 50.00,
                    total: 100.00
                },
                {
                    id: "prod2",
                    imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
                    nombre: "Camiseta Curry",
                    cantidad: 3,
                    precioUnitario: 25.00,
                    total: 75.00
                }
            ]
        },
        {
            id: "123456",
            fecha: "2023-10-01",
            productos: [
                {
                    id: "prod1",
                    imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
                    nombre: "Camiseta Lakers Kobe Bryant #24",
                    cantidad: 2,
                    precioUnitario: 50.00,
                    total: 100.00
                },
                {
                    id: "prod2",
                    imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
                    nombre: "Camiseta Lakers Kobe Bryant #24",
                    cantidad: 3,
                    precioUnitario: 25.00,
                    total: 75.00
                }
            ]
        }
    ]

   

    return (
        <div className="historial-container">
            <h3 className='title'>Historial de Compras</h3>
            {loading ? (
                // Skeleton loading state
                <div className="skeleton-container">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="compra-item">
                            <div className="compra-header">
                                <div className="compra-info">
                                    <Skeleton variant="text" width="150px" height={20} />
                                    <Skeleton variant="text" width="120px" height={20} />
                                </div>
                            </div>
                            <div className="compra-detalles">
                                <div className="producto-item">
                                    <div className='producto-imagen'>
                                        <Skeleton variant="rectangular" width={100} height={100} />
                                    </div>
                                    <div className="producto-nombre">
                                        <Skeleton variant="text" width="200px" height={30} />
                                    </div>
                                    <div className="producto-cantidad">
                                        <Skeleton variant="text" width="80px" height={30} />
                                    </div>
                                    <div className="producto-info">
                                        <Skeleton variant="text" width="120px" height={30} />
                                        <Skeleton variant="text" width="100px" height={30} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : compras.length === 0 ? (
                <div className="no-compras">
                    <p>No hay compras en el historial</p>
                </div>
            ) : (
                compras.map((compra, index) => {
                  

                    return (
                        <div key={index} className="compra-item">
                            <div className="compra-header">
                                <div className="compra-info">
                                    <p className="compra-id">ID de Compra: <span>#{compra.id}</span></p>
                                    <p className="compra-fecha">Fecha: <span>{compra.fecha}</span></p>
                                </div>
                            </div>
                            <div className="compra-detalles">
                                {compra.productos.map((producto, prodIndex) => (
                                    <div key={prodIndex} className="producto-item">
                                        <div className='producto-imagen'>
                                            <img src={producto.imagen} alt={producto.nombre} className='imagen' />
                                        </div>
                                        <div className="producto-nombre">
                                            <p>{producto.nombre}</p>
                                        </div>
                                        <div className="producto-cantidad">
                                            <p>Cantidad: <span>{producto.cantidad}</span></p>
                                        </div>
                                        <div className="producto-info">
                                            <p>Precio Unitario: <span>${producto.precioUnitario}</span></p>
                                            <p>Total: <span>${producto.total}</span></p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};
export default Historial;