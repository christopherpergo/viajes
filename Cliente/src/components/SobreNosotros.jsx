import React from 'react'
import foto1 from '../Fotos/foto1.jpg';
import foto2 from '../Fotos/foto2.jpg';
import foto3 from '../Fotos/foto3.jpg';
import foto4 from '../Fotos/foto4.jpg';
import foto7 from '../Fotos/foto7.jpg';




export const SobreNosotros = () => {
  const email = 'christopher.pg1990@gmail.com';
  const insta = 'https://www.instagram.com/christopher_pergo/';
  const linkedin = 'https://www.linkedin.com/in/christopherpereiragomes1990';
  const facebook= 'https://www.facebook.com/cpereiragomez';


  return (
    <div>
      <div className='fotoSobreMi'>
      <img className='sobreMi' src={foto4}/> 
       <img className='sobreMi' src={foto1}/> 
       <img className='sobreMi' src={foto2}/> 
       <img className='sobreMi' src={foto3}/> 
      <img className='sobreMi' src={foto7}/> 
      </div>
      <div className='textoAboutme'>
        <p>¡Hola! Soy Christopher, tengo 33 años y soy un apasionado de la tecnología y el desarrollo web. Hablo cuatro idiomas: portugués, español, inglés y francés. Poseo un certificado de profesionalidad de nivel 3 en desarrollo de aplicaciones web, donde adquirí habilidades en diversos lenguajes y tecnologías.
Mi pasión por viajar ha sido una fuente constante de inspiración en mi vida. Explorar nuevos destinos y experimentar diferentes culturas me ha enriquecido personalmente y me ha impulsado a crear esta página web. Aquí, combino mi amor por la tecnología con mis experiencias de viaje, compartiendo mis aventuras y cómo la tecnología se entrelaza con ellas.
Además, el deporte es otra de mis grandes pasiones. Mantenerme activo y saludable es fundamental para mí, y creo que la disciplina y la perseverancia que he adquirido a través del deporte se reflejan en mi enfoque profesional.
Si estás buscando un desarrollador web que combine experiencia técnica, pasión por los viajes, habilidades multilingües y una mentalidad orientada al rendimiento, no dudes en ponerte en contacto conmigo.</p>
<div className='logoMediaFinal'>
<a className='logoFinal' href={`mailto:${email}`}><img src='https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-email.svg&w=1920&q=75'/></a>
<a className='logoFinal' href={insta} target="_blank" rel="noopener noreferrer"> <img src="https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-instagram.svg&w=48&q=75"/></a>
<a className='logoFinal' href={facebook} target='_blank' rel="noopener noreferrer"><img src="https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-facebook.svg&w=48&q=75"/> </a>
<a className='logoFinal' href={`https://api.whatsapp.com/send?phone=0034651158543`} target="_blank" rel="noopener noreferrer"><img src="https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-whatsapp.svg&w=1920&q=75"/></a>
<a className='logoFinal' href={linkedin} target="_blank" rel="noopener noreferrer"><img src="https://growproexperience.com/_next/image/?url=%2Fassets%2Ficons%2Ficon-social-linkedin.svg&w=1920&q=75"/></a>
</div>
      </div>


    </div>
  )
}
