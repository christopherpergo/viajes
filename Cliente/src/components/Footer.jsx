import React, { useState } from "react";
import axios from "axios";

export const Footer = () => {

  const [ciudad, setCiudad] = useState("");
  const [destination, setDestination] = useState(null);
  const [isDestinationVisible, setIsDestinationVisible] = useState(false); // 

  const handleSearch = () => {
    // Convierte la entrada de usuario a mayúscula inicial y minúsculas
    const formattedCiudad = ciudad.charAt(0).toUpperCase() + ciudad.slice(1).toLowerCase();
  
    axios.get(`https://basedatosviajes.onrender.com/buscarDestinos?search=${formattedCiudad}`)
      .then((response) => {
        const destinosEncontrados = response.data;
        if (destinosEncontrados.length > 0) {
          // Si se encuentra al menos un destino, establece la información del destino
          const destino = destinosEncontrados[0];
          destino.ciudad = destino.ciudad.charAt(0).toUpperCase() + destino.ciudad.slice(1).toLowerCase();
          destino.pais = destino.pais.charAt(0).toUpperCase() + destino.pais.slice(1).toLowerCase();
          setDestination(destino);
        } else {
          // Si no se encuentra ninguna coincidencia, puedes mostrar un mensaje de error o tomar otra acción
          console.log("Ningún destino encontrado.");
        }
      })
      .catch((error) => {
        console.error("Error al buscar destinos:", error);
      });
  }
  
  //boton de cerrar
  const handleCloseDestination = () => {
    setIsDestinationVisible(false);
    // Limpia la información del destino
    setDestination(null);
  };

  return (
    <>
    <footer>
      <div className='footerPadre'>
      <div className='footerP1'>
    <h3 className='textoFooter'>¿Buscas inspiración para tu próximo viaje?</h3>
    <input className='inputFooter' type='text' placeholder='¡Prueba suerte!'
      value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>
    <button className='botonFooter' onClick={handleSearch}>Buscar</button>
    </div>

    {destination && (
        <div className="destination-info">
        <div className="divPadre">
          <div className="divHijo">
          <h2>{destination.pais}</h2>
          <h3>Ciudad: {destination.ciudad}</h3>
          </div>
          <img className="fotoDiv" src={destination.imagen}/>
          </div>
          <p>{destination.turismo}</p>
          <button className="botonDinamico" onClick={handleCloseDestination}>Buscar otro Destino</button>
      
        </div>
      )}

    <div className='textoFooter2'>
<p>© Tips para viajeros 2023 - Blog de viaje</p>
<p>Creado por: Christopher Pereira</p>
<p>Web <span className='textoFooter3'>Developer</span></p>
</div>
</div>
    </footer>
    </>
  )
}
