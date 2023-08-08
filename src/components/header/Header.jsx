import LogoHeader from './../../assets/img/logo_hergo.jpg'
import { Layout, Row, Col } from 'antd' // Se importan los componentes de ant desig
import './Header.scss'
import { Link } from 'react-router-dom'

export default function Header () {
  // const {user,setUser} = useAuth();
  const { Header } = Layout // Se importa el header del componente del Layout

  return (
    <Header className='header'>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <div className='menu-top'>
            <div className='menu-top__logo'>
              <Link to='hergoweb/'>
                <img src={LogoHeader} alt='logo ADMIN' className='logo' />
              </Link>
            </div>
            <Row className='menu-top__ayuda' style={{ position: 'relative', right: '15%' }}>
              <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                <Link to='hergoweb/' className='link-1'>Inicio</Link>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                <Link to='hergoweb/nosotros' className='link-2'>Nosotros</Link>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                <Link to='hergoweb/contacto' className='link-3'>Contacto</Link>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                <Link to='hergoweb/services' className='link-4'>Servicios</Link>
              </Col>
            </Row>
            <Row style={{ position: 'relative', right: '5%', display: 'flex' }}>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} style={{ position: 'relative', right: '50%' }}>
                <a href='http://' target='__blank'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' className='bi bi-whatsapp' viewBox='0 0 16 16'>
                    <path d='M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z' />
                  </svg>
                </a>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <a href='https://www.facebook.com/profile.php?id=100093564843414' target='__blank'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' className='bi bi-facebook' viewBox='0 0 16 16'>
                    <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                  </svg>
                </a>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Header>
  )
}
