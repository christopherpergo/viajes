import React, { useState } from 'react';
import axios from 'axios';

export const Relatos = () => {
  const [relato, setRelato] = useState('');
  const [lugar, setLugar] = useState('')
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

   if (!relato) {
      setError('Por favor, ingresa un relato antes de enviar.');
      return;
    }

    axios.post('https://basedatosviajes.onrender.com/createRelatos', { relato, lugar })
      .then((result) => {
        setEnviado(true);
        setRelato(''); // Limpiar el campo de relato
        setError(''); // Limpiar el mensaje de error si había uno anteriormente
        setLugar('')
      })
      .catch((err) => {
        setError('Error al enviar el relato. Por favor, inténtalo de nuevo.');
      });
  };
  const handleCloseEnviado = () => {
    setEnviado(false);
  };

  const handleCloseError = () => {
    setError('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
 <div className="formularioRelato">
        <h2 className='formularioRelatoH2'>Comparte tu historia</h2>
        <p className='formularioRelatoP'>Cuentanos sobre tus viajes, despierta la aventura en otros.<br/>
         Tu historia puede inspirar, conectar y llevarnos a lugares inexplorados desde la comodidad de un relato.</p>

<input className="input-control" placeholder='¿De que parte del mundo nos vas a hablar hoy?'
 value={lugar} onChange={(e) => setLugar(e.target.value)}></input> <br/>
<textarea type="text"className="form-control" value={relato}
          onChange={(e) => setRelato(e.target.value)}></textarea>
        <br/>
        <button className="enviarRelato">Enviar</button>
        </div>
      </form>
      
     

      {enviado && (
        <div className="message success">
          <p>Relato ENVIADO con éxito.</p>
          <button className="close-button" onClick={handleCloseEnviado}>
            Cerrar
          </button>
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
