import React, { useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Main = () => {
  const email = 'christopher.pg1990@gmail.com';
  const insta = 'https://www.instagram.com/christopher_pergo/';
  const linkedin = 'https://www.linkedin.com/in/christopherpereiragomes1990';
  const facebook= 'https://www.facebook.com/cpereiragomez';

  const images = [
    "https://www.hangel.es/wp-content/uploads/2016/01/xturkey_main.jpg.pagespeed.ic_.iPM2OyRS66.jpg",
    "https://humanidades.com/wp-content/uploads/2017/03/torre-eiffel-8-e1565200084478.jpg",
    "https://interrailero.com/wp-content/uploads/2022/01/que-ver-en-barcelona-mapa-1000x400.jpg",
    "https://viajeropeligro.com/wp-content/uploads/2020/11/playas-tailandia.jpg",
    "https://i0.statig.com.br/bancodeimagens/3e/20/al/3e20al33r15ohb2ifqnfzsr8t.jpg",
    "https://cdn.britannica.com/15/20215-050-9F587C1E/Cologne-Cathedral-rail-pedestrian-bridge-Hohenzollern-Germany.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/panoramica-bilbao-guggenheim-1634221518.png?crop=0.891xw:1.00xh;0.0555xw,0&resize=2048:*",
    "https://101-zone.com/wp-content/uploads/2023/04/0J0J1697-1536x864.jpg"
  ];
 
  const [ciudad, setCiudad] = useState("");
  const [destination, setDestination] = useState(null);
  const [isDestinationVisible, setIsDestinationVisible] = useState(false);
  const [error, setError] = useState("");

  const handleCloseError = () => {
    setError(""); // Limpia el mensaje de error
  };

  const handleSearch = () => {
    const formattedCiudad =
      ciudad.charAt(0).toUpperCase() + ciudad.slice(1).toLowerCase();
  
    axios.get(`https://basedatosviajes.onrender.com/buscarDestinos?search=${formattedCiudad}`)
      .then((response) => {
        const destinosEncontrados = response.data;
        if (destinosEncontrados.length > 0) {
          // Si se encuentra al menos un destino, establece la información del destino
          const destino = destinosEncontrados[0];
          destino.ciudad = destino.ciudad.charAt(0).toUpperCase() + destino.ciudad.slice(1).toLowerCase();
          destino.pais = destino.pais.charAt(0).toUpperCase() + destino.pais.slice(1).toLowerCase();
          setIsDestinationVisible(true); // Establece que el destino es visible
          setDestination(destino); // Establece la información del destino
          setError(""); // Limpia el mensaje de error
          setCiudad("")
        } else {
          setError("Lo siento pero este destino aún no se encuentra en la base de datos.");
          setIsDestinationVisible(false); // Establece que el destino no es visible
          setDestination(null); // Limpia la información del destino
          setCiudad("");
        }
      })
      .catch((error) => {
        setError("Error al buscar destinos: " + error);
        setIsDestinationVisible(false); // Establece que el destino no es visible
        setDestination(null); // Limpia la información del destino
      });
  }
  
  
  const handleCloseDestination = () => {
    setIsDestinationVisible(false);
    setDestination(null);
  };

  return (
    <>
      <div className='padreMain'>
        <div className='socialMedia'>
          <a className='logoMedia' href={`mailto:${email}`}>
            <img src='https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-email.svg&w=1920&q=75' />
          </a>
          <br />
          <a className='logoMedia' href={insta} target="_blank" rel="noopener noreferrer">
            <img src="https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-instagram.svg&w=48&q=75" />
          </a>
          <br />
          <a className='logoMedia' href={facebook} target='_blank' rel="noopener noreferrer">
            <img src="https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-facebook.svg&w=48&q=75" />
          </a>
          <br />
          <a className='logoMedia' href={`https://api.whatsapp.com/send?phone=0034651158543`} target="_blank" rel="noopener noreferrer">
            <img src="https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-whatsapp.svg&w=1920&q=75" />
          </a>
          <br />
          <a className='logoMedia' href={linkedin} target="_blank" rel="noopener noreferrer">
            <img src="https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-linkedin.svg&w=1920&q=75" />
          </a>
        </div>

        <div className='contenidoMain'>
          <div className='carousel-container'>
            <Carousel autoPlay interval={2500} infiniteLoop showStatus={false} showThumbs={false} transitionTime={1000} stopOnHover={false} emulateTouch>
              {images.map((image, index) => (
                <div key={index}>
                  <img className='fotoPrincipal' src={image} alt={`Slide ${index}`} />
                </div>
              ))}
            </Carousel>

            <div className='text-overlay'>
              <h2>¿Listos para el siguiente viaje?</h2>
              <input className="inputMain" type="text" placeholder="¿Qué lugar te gustaría visitar?"
                value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>
              <button className="botonMain" onClick={handleSearch}>Buscar</button>
            </div>
          </div>
        </div>
      </div>

      <h2 className='eslogan'>Conectando Viajeros:<br /> "Comparte tus historias y encuentra nuevas aventuras."</h2>

   
      {destination && (
        <div className="destination-info">
        <div className="divPadre">
          <div className="divHijo">
          <h2>{destination.pais}</h2>
          <h3>Ciudad: {destination.ciudad}</h3>
          </div>
          <img className="fotoDiv" src={destination.imagen}/>
          </div>
          <p>{destination.informacion}</p>
          <button className="botonDinamico" onClick={handleCloseDestination}>Buscar otro Destino</button>
      </div>
        )}
          {error && (
        <div className="message error">
          <p>{error}</p>
          <button className="close-button" onClick={handleCloseError}>
            Cerrar
          </button>
        </div>
      )}
    </>
  );
};
