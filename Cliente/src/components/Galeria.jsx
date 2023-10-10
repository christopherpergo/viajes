import React, { useState, useEffect } from "react";
import axios from "axios";

export const Galeria = () => {

  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    axios
      .get("https://basedatosviajes.onrender.com/destinos")
      .then((result) => setDestinos(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
   <>

<div className="relatosD">
     {destinos.map((destinos) => (
         <div key={destinos._id}>
         <div className="relatos">
          <h3>{destinos.ciudad}</h3>
         <img className="fotoDestino" src={destinos.imagen}/>
         </div>
      </div>
    
    ))} 
   </div>
   

   </> 
    )
}
