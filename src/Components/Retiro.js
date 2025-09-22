
import React, { useState } from 'react';
import '../Style/Retiro.css';

const Retiro = () => {
    const [selectedPickupPoint, setSelectedPickupPoint] = useState('');
    const [deliveryOption, setDeliveryOption] = useState('pickup');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        notes: ''
    });

    // Puntos de retiro organizados por zona
    const pickupPoints = {
        'Zona Sur': [
            { id: 'wilde', name: 'Estación de Wilde', address: 'Av. Mitre y Vías del Tren' },
            { id: 'dominico', name: 'Estación de Dominico', address: 'Av. Dominico y Vías del Tren' },
            { id: 'sarandi', name: 'Estación de Sarandí', address: 'Av. Sarandí y Vías del Tren' },
            { id: 'avellaneda', name: 'Estación de Avellaneda', address: 'Av. Avellaneda y Vías del Tren' },
            { id: 'donbosco', name: 'Estación de Don Bosco', address: 'Av. Don Bosco y Vías del Tren' },
            { id: 'bernal', name: 'Estación de Bernal', address: 'Av. San Martín y Vías del Tren' },
            { id: 'quilmes', name: 'Estación de Quilmes', address: 'Av. Rivadavia y Vías del Tren' },
            { id: 'lanus', name: 'Estación de Lanús', address: 'Av. Hipólito Yrigoyen y Vías del Tren' }
        ],
        'Capital Federal': [
            { id: 'obelisco', name: 'Obelisco', address: 'Av. 9 de Julio y Av. Corrientes' },
            { id: 'puertomadero', name: 'Puerto Madero', address: 'Dique 4 - Costanera Sur' },
            { id: 'palermo', name: 'Palermo', address: 'Plaza Serrano - Jorge Luis Borges y Gorriti' },
            { id: 'caballito', name: 'Caballito', address: 'Estación Caballito - Av. Rivadavia y Acoyte' }
        ]
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí irá la lógica para procesar el pedido
        console.log('Datos del pedido:', {
            deliveryOption,
            selectedPickupPoint,
            formData
        });
        alert('¡Pedido enviado correctamente! Te contactaremos pronto.');
    };

    return (
        <div className="retiro-container">
            <div className="retiro-content">
                <div className="retiro-header">
                    <h1>Opciones de Entrega</h1>
                    <p>Selecciona tu método de entrega preferido</p>
                </div>

                <form onSubmit={handleSubmit} className="retiro-form">
                    {/* Opciones de entrega */}
                    <div className="delivery-options">
                        <h2>Método de Entrega</h2>
                        <div className="option-cards">
                            <div
                                className={`option-card ${deliveryOption === 'pickup' ? 'selected' : ''}`}
                                onClick={() => setDeliveryOption('pickup')}
                            >
                                <div className="option-icon">📍</div>
                                <h3>Retiro en Punto</h3>
                                <p>Retira tu pedido en uno de nuestros puntos de entrega</p>
                                <span className="option-price">Gratis</span>
                            </div>

                            <div
                                className={`option-card ${deliveryOption === 'delivery' ? 'selected' : ''}`}
                                onClick={() => setDeliveryOption('delivery')}
                            >
                                <div className="option-icon">🚚</div>
                                <h3>Envío a Domicilio</h3>
                                <p>Recibe tu pedido directamente en tu domicilio</p>
                                <span className="option-price">Consultar costo</span>
                            </div>
                        </div>
                    </div>

                    {/* Puntos de retiro */}
                    {deliveryOption === 'pickup' && (
                        <div className="pickup-points-section">
                            <h2>Selecciona tu Punto de Retiro</h2>
                            {Object.entries(pickupPoints).map(([zone, points]) => (
                                <div key={zone} className="zone-section">
                                    <h3 className="zone-title">{zone}</h3>
                                    <div className="points-grid">
                                        {points.map(point => (
                                            <div
                                                key={point.id}
                                                className={`pickup-point ${selectedPickupPoint === point.id ? 'selected' : ''}`}
                                                onClick={() => setSelectedPickupPoint(point.id)}
                                            >
                                                <div className="point-header">
                                                    <span className="point-name">{point.name}</span>
                                                    <span className="point-check">
                                                        {selectedPickupPoint === point.id ? '✓' : '○'}
                                                    </span>
                                                </div>
                                                <p className="point-address">{point.address}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Formulario de datos */}
                    <div className="customer-data-section">
                        <h2>Datos de Contacto</h2>
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="name">Nombre Completo *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Tu nombre completo"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Teléfono *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Tu número de teléfono"
                                />
                            </div>


                            {deliveryOption === 'delivery' && (
                                <div className="form-group full-width">
                                    <label htmlFor="address">Dirección de Entrega *</label>
                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label htmlFor="address">Dirección *</label>
                                            <input
                                                type="text"
                                                id="address"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Tu dirección"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="floor">Piso *</label>
                                            <input
                                                type="text"
                                                id="floor"
                                                name="floor"
                                                value={formData.floor}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Tu piso"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="depto">departamento</label>
                                            <input
                                                type="text"
                                                id="depto"
                                                name="depto"
                                                value={formData.depto}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Tu departamento"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="localidad">localidad *</label>
                                            <input
                                                type="tel"
                                                id="localidad"
                                                name="localidad"
                                                value={formData.localidad}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Localidad"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="province">Provincia *</label>
                                            <input
                                                type="tel"
                                                id="province"
                                                name="province"
                                                value={formData.province}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Tu provincia"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="postal">Codigo postal *</label>
                                            <input
                                                type="tel"
                                                id="postal"
                                                name="postal"
                                                value={formData.postal}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Tu número de teléfono"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}


                                </div>
                    </div>

                        {/* Información adicional */}
                        <div className="delivery-info">
                            <h2>Información de Entregas</h2>
                            <div className="info-cards">
                                <div className="info-card">
                                    <span className="info-icon">⏰</span>
                                    <div>
                                        <h4>Horarios de Retiro</h4>
                                        <p>Lunes a Viernes: 9:00 - 18:00<br />Sábados: 9:00 - 14:00</p>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <span className="info-icon">🚚</span>
                                    <div>
                                        <h4>Envíos a Domicilio</h4>
                                        <p>Realizamos envíos a todo el país<br />Consulta costo y tiempos de entrega.</p>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <span className="info-icon">📞</span>
                                    <div>
                                        <h4>Contacto</h4>
                                        <p>Te contactaremos para coordinar<br />el punto de encuentro.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Botón de envío */}
                        <button
                            type="submit"
                            className="submit-button"
                            disabled={deliveryOption === 'pickup' && !selectedPickupPoint}
                        >
                            Confirmar Pedido
                        </button>
                </form>
            </div>
        </div>
    );
};

export default Retiro;
