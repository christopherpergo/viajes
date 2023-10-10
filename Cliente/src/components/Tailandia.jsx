import React, { useState, useEffect } from "react";
import axios from "axios";

export const Tailandia = () => {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    axios
      .get("https://basedatosviajes.onrender.com/destinos")
      .then((result) => setDestinos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const destinosTailandia = destinos.filter((destino) => destino.pais === "Tailandia");

  return (
    <div className="">
      {destinosTailandia.map((destino) => (
        <div key={destino._id}>
          <div className="destinoIndividual">
            <div className="padreDestinos">
            <div>
<img className="fotoDestinoIndividual" src={destino.imagen}/>
            </div>  
            <div>
              <div className="hijoDestinos">
            <h2>{destino.pais}</h2>
            <h3>Ciudad: {destino.ciudad}</h3>
            <p>Sobre la ciudad: {destino.informacion}</p>
            </div>
            </div>
            </div>
            <p className="parrafoDestinos">QUE VER: {destino.turismo}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

