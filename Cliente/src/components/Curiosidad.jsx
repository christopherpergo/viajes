import React, { useState, useEffect } from "react";
import axios from "axios";

export const Curiosidad = () => {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    axios
      .get("https://basedatosviajes.onrender.com/destinos")
      .then((result) => setDestinos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const toggleContent = (index) => {
    const updatedDestinos = [...destinos];
    updatedDestinos[index].isOpen = !updatedDestinos[index].isOpen;
    setDestinos(updatedDestinos);
  };

  return (
    <>
      <h2 className="eslogan">
        "Explora el mundo con nuestros mejores consejos de viaje <br /> y descubre datos curiosos sobre las ciudades que te dejarán asombrado."
      </h2>

      <div className="relatosD">
        {destinos.map((destino, index) => (
       <div key={destino._id} className="relato">
 <img className="fotoDestino" src={destino.imagen} alt={destino.ciudad} />
            <h3>{destino.ciudad}</h3>
            <div className={`${destino.isOpen ? "expanded-content" : "collapsed-content" }`}>
              <p>{destino.curiosidad}</p>
            </div>
            {destino.curiosidad.length > 500 && (
              <button className="read-more-button" onClick={() => toggleContent(index)}>
                {destino.isOpen ? "Leer menos" : "Leer más"}
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
