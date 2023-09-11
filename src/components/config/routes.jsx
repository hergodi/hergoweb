import { Routes, Route } from 'react-router-dom'
import Inicio from '../pages/inicio/Inicio'
import Contactos from '../pages/contacto/Contactos'
import Nosotros from '../pages/nosotros/Nosotros'
import Services from '../pages/servicios/Services'
import Residencial from '../pages/residencial/Residencial'
import Fachadas from '../pages/fachadas/Fachadas'
import Domos from '../pages/domos/Domos'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/contacto' element={<Contactos />} />
      <Route path='/nosotros' element={<Nosotros />} />
      <Route path='/services' element={<Services />} />
      <Route path='/residencial' element={<Residencial />} />
      <Route path='/fachadas' element={<Fachadas />} />
      <Route path='/domos' element={<Domos />} />
    </Routes>
  )
}

export default RoutesIndex
