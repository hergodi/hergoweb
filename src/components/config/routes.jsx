import { Routes, Route } from 'react-router-dom'
import Inicio from '../pages/inicio/Inicio'
import Contactos from '../pages/contacto/Contactos'
import Nosotros from '../pages/nosotros/Nosotros'
import Services from '../pages/servicios/Services'

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contactos/>} />
        <Route path= '/nosotros' element={<Nosotros />} />
        <Route path='/services' element={<Services />}/>
    </Routes>
  )
}

export default RoutesIndex