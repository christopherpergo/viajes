import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import logoworld from '../Fotos/logoworld.png';
import { Search } from 'tabler-icons-react';


export const Cabecera = () => {

const [selectedOption, setSelectedOption] = useState('');
const navigate = useNavigate(); 

const handleOptionChange = (event) => {
const selectedValue = event.target.value;
setSelectedOption(selectedValue);
const validRoutes = [ '/rutas/destino', '/rutas/tailandia','/rutas/brasil','/rutas/espana','/rutas/caboverde','/rutas/alemania','/nosotros','/galeria','/relatos','/verRelatos' ];
    
  if (validRoutes.includes(selectedValue)) {
      navigate(selectedValue);}
  };

  return (
    <>
    <nav>

<div className='enlaces'>


<Link className='nombrePagina' to="/">Globetrotter</Link>
<img className='logoMundo' src="https://res.cloudinary.com/daacb3ohi/image/upload/v1697217330/pngwing.com_3_wvwicj.png" /> 


 <div className='enlacesMenores'>

<div className='enlacesMenores1'>
<Link to="/curiosidad">Tips & Curiosidades</Link>
  </div>
<div className='lupa1'> 
<Search className='lupa' size={19} strokeWidth={2} color={'white'}/> 
</div>

  <select value={selectedOption} onChange={handleOptionChange}  >
<option value="/rutas" > Destinos</option> 
<option value="/rutas/destino" > Todos los destinos</option> 
<option value="/rutas/tailandia">Tailandia</option>
<option value="/rutas/brasil">Brasil</option>
<option value="/rutas/espana">España</option>
<option value="/rutas/caboverde">Cabo Verde</option>
<option value="/rutas/alemania">Alemania</option>
  </select>

  <select  value={selectedOption} onChange={handleOptionChange}>
<option >Relatos</option>
<option value ="/relatos" >Escribe tu Relato</option>
<option value="/verRelatos">Ver Relatos</option>
  </select>

  <select value={selectedOption} onChange={handleOptionChange}  >
<option value="/">Nosotros</option>
<option value="/nosotros">Sobre Mi</option>
<option value="/galeria">Galeria</option>
 </select>
        
 <div className='enlacesMenores1'><Link to="/contacto" className='botonContacto'>Contacto</Link></div>

          </div>
        </div>
      </nav>
    </>
  );
};


