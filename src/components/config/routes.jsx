import { Routes, Route } from 'react-router-dom'
import Inicio from '../pages/inicio/Inicio'
import Contactos from '../pages/contacto/Contactos'

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contactos />} />
    </Routes>
  )
}

export default RoutesIndex
