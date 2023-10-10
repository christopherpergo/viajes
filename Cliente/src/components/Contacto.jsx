import React, { useState } from 'react';
import axios from 'axios';

export const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [comentario, setComentario] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comentario) {
      setError('Por favor, ingresa tu comentario antes de enviar.');
      return;
    }

    axios
      .post('https://basedatosviajes.onrender.com/createContacto', { nombre, correo, comentario })
      .then((result) => {
        setEnviado(true);
        setNombre('');
        setCorreo('');
        setComentario('');
      })
      .catch((err) => {
        setError('Error al enviar el comentario. Por favor, inténtalo de nuevo.');
      });
  };

  const handleCloseEnviado = () => {
    setEnviado(false);
  };

  const handleCloseError = () => {
    setError('');
  };

  const email = 'christopher.pg1990@gmail.com';
  const insta = 'https://www.instagram.com/christopher_pergo/';
  const linkedin = 'https://www.linkedin.com/in/christopherpereiragomes1990';
  const facebook = 'https://www.facebook.com/cpereiragomez';

  return (
    <>
<form onSubmit={handleSubmit}>
<div className="formularioContacto">

<p className="formularioContactoP">
¿Tienes alguna pregunta o comentario que hacerme? ¿Quieres colaborar conmigo de alguna manera? ¿Tienes algo bueno que decir? (O malo 😎 ). Me encantaría saber de ti. Puedes enviarme un mensaje a continuación o ponerte en contacto conmigo enviando un correo electrónico a{' '}
<a className='emailC' href={`mailto:${email}`}>{email}</a>. ¿Tienes alguna duda que, quizás, pueda ayudarte a resolver? ¡Estoy aquí para escucharte y responder lo antes posible!</p>

<div className='formContacto'>
<input className="input-control" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input> <br />
<input className="input-control" placeholder="Correo Electronico" value={correo} onChange={(e) => setCorreo(e.target.value)}></input> <br />
<textarea type="text" className="form-control" value={comentario} onChange={(e) => setComentario(e.target.value)}></textarea> <br />
<button className="enviarRelato">Enviar</button>
</div>
        </div>
      </form>

      {enviado && (
        <div className="message success">
          <p>Comentario ENVIADO con éxito.</p>
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

      <div className="logoMediaFinal">
        <a className="logoFinal" href={`mailto:${email}`}>
          <img src="https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-email.svg&w=1920&q=75" />
        </a>
        <a className="logoFinal" href={insta} target="_blank" rel="noopener noreferrer">
          <img src="https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-instagram.svg&w=48&q=75" />
        </a>
        <a className="logoFinal" href={facebook} target="_blank" rel="noopener noreferrer">
          <img src="https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-facebook.svg&w=48&q=75" />
        </a>
        <a className="logoFinal" href={`https://api.whatsapp.com/send?phone=0034651158543`} target="_blank" rel="noopener noreferrer">
          <img src="https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-whatsapp.svg&w=1920&q=75" />
        </a>
        <a className="logoFinal" href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src="https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-linkedin.svg&w=1920&q=75" />
        </a>
      </div>
    </>
  );
};

