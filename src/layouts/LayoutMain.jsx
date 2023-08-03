import { Layout } from 'antd'
// Para refrescar el token
// import { refreshAccessTokenApi, getAccessTokenApi } from "../api/auth";

// Componentes
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import Services from '../components/pages/servicios/Services'

// Logos
import { Route, Routes } from 'react-router-dom'
import Inicio from '../components/pages/inicio/Inicio'
import Contactos from '../components/pages/contacto/Contactos'
import Nosotros from '../components/pages/nosotros/Nosotros'
import '../layouts/layoutMain.scss'
import SectionContac from '../seccionContacto/SectionContac'

// import MenuAdminPartidos from '../components/Menu/MenuAdminPartidos'
// import MenuHeader from '../components/Menu/MenuHeader'

export default function LayoutMain () {
  const { Content } = Layout // Se obtiene el componente hijo de Layout

  // Verifica si el usuario existe si no lo redirecciona al login
  // Si existe renderiza el Layout principal
  return (
    <Layout style={{ minHeight: '100vh' }} id='Layout-main'>
      {/** Se importa el header y se le envía el logo correspondiente */}
      <Header history={history} />
      <Layout className='layout'>
        <Content className='content'>
          {/** Contenido, se iteran las rutas para poder navegar entre ellas <LoadRoutes routes={routes} /> */}
          <Routes>
            <Route path='hergoweb/' index element={<Inicio />} />
            <Route path='hergoweb/contacto' element={<Contactos />} />
            <Route path='hergoweb/nosotros' element={<Nosotros />} />
            <Route path='hergoweb/services' element={<Services />} />
          </Routes>
        </Content>
      </Layout>
      {/** Footer con la versión del sistema */}
      <SectionContac />
      <Footer version='Versión 1.0' anio='2022' />
    </Layout>
  )
}
