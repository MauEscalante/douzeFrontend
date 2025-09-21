import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Search.css";

export function Search() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  };
  
  return (
    <>
      <div className="py-4 pt-5 pb-5">
        <form onSubmit={handleSubmit}>
          <div className="contenedor-input">
            <input
              type="text"
              placeholder="Buscar..."
              className="form-control"
              onChange={handleValue}
              value={value}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Search;