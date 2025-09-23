import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Carrito.css';

const Carrito = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simular carga de datos del carrito desde localStorage o API
  useEffect(() => {
    const loadCartItems = () => {
      try {
        const savedCart = localStorage.getItem('carritoItems');
        if (savedCart) {
          setCartItems(JSON.parse(savedCart));
        } else {
          // Datos de ejemplo para demostración
          setCartItems([
            {
              _id: "1",
              titulo: "Camiseta Lakers Kobe Bryant #24",
              descripcion: "Camiseta oficial de Los Angeles Lakers con el número 24 de Kobe Bryant.",
              precio: 89.99,
              imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
              categoria: "Remeras",
              deporte: "Basquet",
              equipo: "Los Angeles Lakers",
              cantidad: 2,
              talla: "M"
            },
            {
              _id: "2",
              titulo: " Golden State Warriors",
              descripcion: "Buzo oficial de Golden State Warriors.",
              precio: 124.99,
              imagen: "https://images.precialo.com/products/remera-mlb-baseball-jersey-overshit-dodgers-hombre-398-0791l/3d6f4680-f25e-4933-9968-ce5edcd9dad4.jpeg",
              categoria: "Buzos",
              deporte: "Basquet",
              equipo: "Golden State Warriors",
              cantidad: 1,
              talla: "L"
            }
          ]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error cargando el carrito:', error);
        setLoading(false);
      }
    };

    loadCartItems();
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('carritoItems', JSON.stringify(cartItems));
    }
  }, [cartItems, loading]);

  // Actualizar cantidad de un producto
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item._id === productId
          ? { ...item, cantidad: newQuantity }
          : item
      )
    );
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item._id !== productId)
    );
  };

  // Limpiar todo el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Calcular total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.precio * item.cantidad);
    }, 0).toFixed(2);
  };

  // Calcular cantidad total de productos
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.cantidad, 0);
  };

  // Navegar al producto
  const goToProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  // Proceder al checkout
  const proceedToCheckout = () => {
    if (cartItems.length === 0) {
      alert('Tu carrito está vacío');
      return;
    }
    // Aquí iría la lógica para proceder al checkout
    alert('Procediendo al checkout...');
  };

  if (loading) {
    return (
      <div className="carrito-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Cargando carrito...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="carrito-container">
      

      {cartItems.length === 0 ? (
        <div className="carrito-empty">
          <div className="empty-cart-icon">🛒</div>
          <h2>Tu carrito está vacío</h2>
          <p>¡Descubre nuestros increíbles productos!</p>
          <button 
            className="btn-continue-shopping"
            onClick={() => navigate('/')}
          >
            Continuar Comprando
          </button>
        </div>
      ) : (
        <div className="carrito-content">
          <div className="carrito-items">
            {cartItems.map(item => (
              <div key={item._id} className="carrito-item">
                <div className="item-image" onClick={() => goToProduct(item._id)}>
                  <img src={item.imagen} alt={item.titulo} />
                </div>
                
                <div className="item-details">
                  <h3 className="item-title" onClick={() => goToProduct(item._id)}>
                    {item.titulo}
                  </h3>
                  <p className="item-description">{item.descripcion}</p>
                  <div className="item-info">
                    <span className="item-category">{item.categoria}</span>
                    <span className="item-team">{item.equipo}</span>
                    {item.talla && <span className="item-size">Talla: {item.talla}</span>}
                  </div>
                </div>

                <div className="item-controls">
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item._id, item.cantidad - 1)}
                      disabled={item.cantidad <= 1}
                    >
                      -
                    </button>
                    <span className="quantity-display">{item.cantidad}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item._id, item.cantidad + 1)}
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="item-price">
                    <span className="price-unit">${item.precio}</span>
                    <span className="price-total">
                      ${(item.precio * item.cantidad).toFixed(2)}
                    </span>
                  </div>
                  
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(item._id)}
                    title="Eliminar producto"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="carrito-summary">
            <div className="summary-card">
              <h3>Resumen del Pedido</h3>
              
              <div className="summary-line">
                <span>Subtotal ({getTotalItems()} productos):</span>
                <span>${calculateTotal()}</span>
              </div>
              
              <div className="summary-line">
                <span>Envío:</span>
                <span>Gratis</span>
              </div>
              
              <div className="summary-line total">
                <span>Total:</span>
                <span>${calculateTotal()}</span>
              </div>

              <div className="summary-actions">
                <button 
                  className="btn-checkout"
                  onClick={proceedToCheckout}
                >
                  Proceder al Pago
                </button>
                
                <button 
                  className="btn-continue"
                  onClick={() => navigate('/')}
                >
                  Continuar Comprando
                </button>
                
                <button 
                  className="btn-clear"
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>

            <div className="shipping-info">
              <h4>📦 Información de Envío</h4>
              <ul>
                <li>✅ Envío gratis en compras mayores a $50</li>
                <li>🚚 Entrega en 3-5 días hábiles</li>
                <li>↩️ Devoluciones gratuitas por 30 días</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
