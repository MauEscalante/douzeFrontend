
import  {  useState, forwardRef } from "react";
import { useNavigate } from 'react-router-dom';
import "../Style/Card.css";

// forwardRef permite que este componente reciba un 'ref' desde su padre (Home)
const Card = forwardRef(({ data , esFavorito}, ref) => {
  
  const [isFavorite, setIsFavorite] = useState(esFavorito);
  const navigate = useNavigate();

  const toggleFavorite = async (e) => {
    e.stopPropagation(); // Evitar que el clic se propague al card
    
    setIsFavorite(!isFavorite);    
  };

  const handleCardClick = () => {
    navigate(`/product/${data._id}`);
  };



  return (
    <div className="card-product" onClick={handleCardClick} style={{ cursor: 'pointer' }} ref={ref}>
      <div className="card-image">
        <img src={data.imagen} alt={data.titulo} />
        <div className="card-description-overlay">
          <p className="card-description">{data.descripcion}</p>
        </div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{data.titulo}</h3>
        <div className="card-footer">
          <span className="card-price">${data.precio}</span>
          <button 
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={toggleFavorite}
          >
            <span className="heart-icon">
              {isFavorite ? '❤️' : '🤍'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
});

export default Card;
