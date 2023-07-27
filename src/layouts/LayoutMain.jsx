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

// import MenuAdminPartidos from '../components/Menu/MenuAdminPartidos'
// import MenuHeader from '../components/Menu/MenuHeader'

export default function LayoutMain () {
  const { Content } = Layout // Se obtiene el componente hijo de Layout

  // Verifica si el usuario existe si no lo redirecciona al login
  // Si existe renderiza el Layout principal
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/** Se importa el header y se le envía el logo correspondiente */}
      <Header history={history} />
      <Layout>
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
      </Layout>
      {/** Footer con la versión del sistema */}
      <Footer version='Versión 1.0' anio='2022' />
    </Layout>
  )
}
