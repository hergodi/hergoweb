import { Routes, Route } from 'react-router-dom'
import Inicio from '../pages/inicio/Inicio'
import Contactos from '../pages/contacto/Contactos'
import Nosotros from '../pages/nosotros/Nosotros'
import Services from '../pages/servicios/Services'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='hergoweb/' element={<Inicio />} />
      <Route path='hergoweb/contacto' element={<Contactos />} />
      <Route path='hergoweb/nosotros' element={<Nosotros />} />
      <Route path='hergoweb/services' element={<Services />} />
    </Routes>
  )
}

export default RoutesIndex
