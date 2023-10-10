import React from "react";
import { Link } from 'react-router-dom'; 

export const Destinos = () => {

 return (
   <>
<div className="todosDestinos">

<div className="espana"><h3>España</h3>
<Link className='infoLink1' to="/rutas/espana">Ver Más</Link></div>

<div className="tailandia"><h3>Tailandia</h3>
<Link className='infoLink1' to="/rutas/tailandia">Ver Más</Link></div>

<div className="alemania"><h3>Alemania</h3>
<Link className='infoLink1' to="/rutas/alemania">Ver Más</Link></div>

<div className="caboverde"><h3>Cabo Verde</h3>
<Link className='infoLink1' to="/rutas/caboverde">Ver Más</Link></div>

<div className="brasil"><h3>Brasil</h3>
<Link className='infoLink1' to="/rutas/brasil">Ver Más</Link></div>

</div>


   
   </>
  )
}
