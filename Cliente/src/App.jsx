import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cabecera } from './components/Cabecera';
import { Main } from './components/Main';
import { Contacto } from './components/Contacto';
import { Destinos } from './components/Destinos';
import { Footer } from './components/Footer';
import { Tailandia } from './components/Tailandia';
import { Brasil } from './components/Brasil';
import { Alemania } from './components/Alemania';
import { CaboVerde } from './components/CaboVerde';
import { Espana } from './components/Espana';
import { Relatos } from './components/Relatos';
import { Main2 } from './components/Main2';
import { SobreNosotros } from './components/SobreNosotros';
import { Galeria } from './components/Galeria';
import { Curiosidad } from './components/Curiosidad';
import { Economicos } from './components/Economicos';
import { VerRelatos } from './components/VerRelatos';


function App() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>
        <Route path="/" element={<Main2Outlet />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<SobreNosotros />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/curiosidad" element={<Curiosidad/>} />
        <Route path="/relatos" element={<Relatos />} />
        <Route path="/rutas/destino" element={<Destinos />} />
        <Route path="/rutas/tailandia" element={<Tailandia />} />
        <Route path="/rutas/brasil" element={<Brasil />} />
        <Route path="/rutas/alemania" element={<Alemania />} />
        <Route path="/rutas/caboverde" element={<CaboVerde />} />
        <Route path="/rutas/espana" element={<Espana />} />
        <Route path='/economicos' element={<Economicos/>}/>
        <Route path='/verRelatos' element={<VerRelatos/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function Main2Outlet() {
  return (
    <div>
      <Main />
      <Main2 />
    </div>
  );
}

export default App;


