import { Layout } from 'antd'
// Para refrescar el token
// import { refreshAccessTokenApi, getAccessTokenApi } from "../api/auth";

// Componentes
import Header from './../components/header/Header.jsx'
import Footer from './../components/footer/Footer.jsx'
import Services from './../components/pages/servicios/Services.jsx'

// Logos
import { Route, Routes } from 'react-router-dom'
import Inicio from '../components/pages/inicio/Inicio.jsx'
import Contactos from '../components/pages/contacto/Contactos.jsx'
import Nosotros from '../components/pages/nosotros/Nosotros.jsx'
import Residencial from '../components/pages/residencial/Residencial.jsx'
import Fachadas from '../components/pages/fachadas/Fachadas.jsx'
import Domos from '../components/pages/domos/Domos.jsx'
import './../layouts/layoutMain.scss'
import SectionContac from '../seccionContacto/SectionContac.jsx'

export default function LayoutMain () {
  const { Content } = Layout // Se obtiene el componente hijo de Layout

  return (
    <Layout style={{ minHeight: '100vh' }} id='Layout-main'>
      {/** Se importa el header y se le envía el logo correspondiente */}
      <Header history={history} />
      <Layout className='layout'>
        <Content className='content'>
          {/** Contenido, se iteran las rutas para poder navegar entre ellas <LoadRoutes routes={routes} /> */}
          <Routes>
            <Route path='/' index element={<Inicio />} />
            <Route path='/contacto' element={<Contactos />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/services' element={<Services />} />
            <Route path='/residencial' element={<Residencial />} />
            <Route path='/fachadas' element={<Fachadas />} />
            <Route path='/domos' element={<Domos />} />
          </Routes>
        </Content>
      </Layout>
      {/** Footer con la versión del sistema */}
      <SectionContac />
      <Footer version='Versión 1.0' anio='2022' />
    </Layout>
  )
}
