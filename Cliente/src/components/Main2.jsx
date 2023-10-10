import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import logoavion from '../Fotos/logoavion.png';
import { WorldUpload } from 'tabler-icons-react';
import { HeartHandshake } from 'tabler-icons-react';
import { PlaneDeparture } from 'tabler-icons-react';


export const Main2 = () => {
 
const email = 'christopher.pg1990@gmail.com';
const insta = 'https://www.instagram.com/christopher_pergo/';
const linkedin = 'https://www.linkedin.com/in/christopherpereiragomes1990';
const facebook= 'https://www.facebook.com/cpereiragomez';
 
const [animacion, setanimacion] = useState(false);

useEffect(() => {
const handleScroll = () => {
const divPosition = document.getElementById('animacionTexto').getBoundingClientRect();
const windowHeight = window.innerHeight;

if (divPosition.top < windowHeight) {
      setanimacion(true);
    }
  };
window.addEventListener('scroll', handleScroll);
return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
  <>
  <div className='infoPadre'>

<div className='infoTips'>
<h3>Tips y Curiosidades</h3>
<p> Descubre consejos útiles para sacar el máximo provecho de tu experiencia.</p>
<Link className='infoLink' to="/curiosidad">Ver Más</Link>
</div>

<div className='infoRelatos'>
<h3>Relatos Compartidos</h3>
<p> Sumérgete en un mundo de historias cautivadoras mientras compartes tus propias vivencias con nosotros.</p>
<Link to="/verRelatos" className='infoLink' >Ver Más</Link> 
</div>

<div className='infoPlanifica'>
<h3>Planifica tu Viaje</h3>
<p> Diseña tu aventura perfecta al explorar una variedad de destinos y actividades únicas.</p>
<Link className='infoLink' to="/rutas/destino">Ver Más</Link>
</div>
</div>

<div className='textoPadre'>

<div   id="animacionTexto" className={`textoAnimacion ${animacion ? 'active' : ''}`} >
<h2>¿Sabias que?</h2>
<p>-Tradicionalmente, los martes y miércoles suelen ser días en los que las aerolíneas lanzan ofertas y promociones. También hay menos demanda de viajes en estos días, lo que puede resultar en tarifas más bajas.</p>
<br></br>
<h2>¿Conoces las tarjetas eSIM?</h2>
<p>-Estas tarjetas son la evolución de las SIM tradicionales. Descarga la app en tu móvil, elige el plan que prefieras y disfruta de conexión directa al país que visites. Simplifican la gestión de datos y conectividad, especialmente en viajes internacionales.</p>
</div>

<div className='textoFoto'>
<img className= "fotoAvion" src={logoavion} />
</div>
</div>

<div className='fotoMedioPantalla'>

<h2 >Descubre como <span className='palabra1'>planear</span> un viaje económico</h2>
<Link className='economic' to="/economicos">Click Aquí</Link>
</div>

<h2 className='textoFinal'>...Antes de viajar</h2>
<div className='parteFinal'>

<div className='divFinal'>
<WorldUpload className='emojiFinal' size={80} strokeWidth={2} color={'#4073bf'}
  />
<h2>Visa</h2>
<p>Comprueba si el pais al que vas a viajar necesitas de una visa</p>
<a className='enlaceWeb' href='https://www.ivisa.com/'>Ir a ¡VISA</a>
</div> 

<div className='divFinal'>
<HeartHandshake className='emojiFinal' size={80}strokeWidth={2} color={'#4073bf'}
  />
<h2>Seguro de Viaje</h2>
<p>Compara el precio de los mejores y mas economicos seguros de viaje disponible en el mercado</p>
<a className='enlaceWeb' href='https://capturetheatlas.com/es/mejor-seguro-de-viaje/'>Ver Seguros</a>
</div>

<div className='divFinal'>
<PlaneDeparture className='emojiFinal' size={80} strokeWidth={2} color={'#4073bf'}
  />
<h2>Get Your Guide</h2>
<p>"Reserva traslados, tours y actividades con antelación."</p>
<a className='enlaceWeb' href='https://www.getyourguide.com/?partner_id=47E2SAP&utm_medium=online_publisher&placement=button-cta&deeplink_id=5125979f-e891-5a81-8edf-0d321658d812&visitor-id=CRQIG4ULGBWMNMOV1FDZZS8G933BMN3O&locale_autoredirect_optout=true'>Ir a Get Your Guide</a>
</div>

</div>

<h2 className='textoFinal'>¡Sigamos en contacto!</h2>
<div className='logoMediaFinal'>
<a className='logoFinal' href={`mailto:${email}`}><img src='https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-email.svg&w=1920&q=75'/></a>
<a className='logoFinal' href={insta} target="_blank" rel="noopener noreferrer"> <img src="https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-instagram.svg&w=48&q=75"/></a>
<a className='logoFinal' href={facebook} target='_blank' rel="noopener noreferrer"><img src="https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-facebook.svg&w=48&q=75"/> </a>
<a className='logoFinal' href={`https://api.whatsapp.com/send?phone=0034651158543`} target="_blank" rel="noopener noreferrer"><img src="https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-whatsapp.svg&w=1920&q=75"/></a>
<a className='logoFinal' href={linkedin} target="_blank" rel="noopener noreferrer"><img src="https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-linkedin.svg&w=1920&q=75"/></a>
</div>
  </>
  )
}
