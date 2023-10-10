import React, { useState, useEffect } from "react";
import axios from "axios";

export const VerRelatos = () => {
  const [relatos, setRelatos] = useState([]);

  useEffect(() => {
    axios.get("https://basedatosviajes.onrender.com")
      .then((result) => setRelatos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const toggleContent = (index) => {
    const updatedRelatos = [...relatos];
    updatedRelatos[index].isOpen = !updatedRelatos[index].isOpen;
    setRelatos(updatedRelatos);
  };

  return (
    <>
 <div className="relatosD">
 {relatos.map((relato, index) => (
    <div key={relato._id} className="relato">
     <h3>{relato.lugar}</h3>
    <div className={`${relato.isOpen ? "expanded-content" : "collapsed-content" }`}>
    <p>{relato.relato}</p>
    </div>
    {relato.relato.length > 500 && (
    <button className="read-more-button" onClick={() => toggleContent(index)}>
    { relato.isOpen ? "Leer menos" : "Leer más"}
     </button>
            )}
    
    </div>
   ))}
  </div>
    </>
  );
  
  
};
