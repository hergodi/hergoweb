import LogoHeader from './../../assets/img/logo_hergo.jpg';
import { Layout, Row, Col} from "antd"; //Se importan los componentes de ant desig
import "./Header.scss";
import { Link } from "react-router-dom";


export default function Header() {
  //const {user,setUser} = useAuth();
  const { Header } = Layout; //Se importa el header del componente del Layout

  
  return (
    <Header className="header">
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <div className="menu-top">
            <div className="menu-top__logo">
              <Link to={`/inicio`}>
                <img src={LogoHeader} alt="logo ADMIN" className="logo" />
              </Link>
            </div>
            
            
            <div className="menu-top__ayuda">
                <div className="li-menu">
                <Link to={'/'} className='link-1'>Inicio</Link>
                <Link to={'/nosotros'} className='link-2'>nosotros</Link>
                <Link to={'/contacto'} className='link-3'>Contacto</Link>
                <Link to={'/services'} className='link-4'>Servicios</Link>
                </div>
            </div>
          </div>
        </Col>
      </Row>      
    </Header>
  );
}