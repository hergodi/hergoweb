import LogoHeader from './../../assets/img/logo_hergo.jpg';
import { Layout, Row, Col} from "antd"; //Se importan los componentes de ant desig
import "./Header.scss";
//import LogoUser from "../../assets/img/user.svg";
import { Link } from "react-router-dom";
//cerrar sesión
//import { logout } from "../../api/auth";
//import useAuth from "../../hooks/useAuth";
// import {QuestionOutlined,CloseCircleFilled, UserOutlined} from '@ant-design/icons';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import MenuHeader from './../Menu/MenuHeader'

export default function Header({ Logo, history}) {
  //const {user,setUser} = useAuth();
  const { Header } = Layout; //Se importa el header del componente del Layout
  let logo_img = Logo ? <Logo />:<LogoHeader />;
  
  return (
    <Header className="header">
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <div className="menu-top">
            <div className="menu-top__logo">
              <Link to={`/home`}>
                <img src={LogoHeader} alt="logo ADMIN" className="logo" />
              </Link>
            </div>
            
            <div className="menu-top__menu" style={{textAlign: "-webkit-right"}}>
              {history.location.state ? 
                  <MenuHeader history={history}/>
                :
                  undefined
              }
            </div>
            
            <div className="menu-top__ayuda">
                <div className="li-menu">
                  
                </div>
            </div>
          </div>
        </Col>
      </Row>      
    </Header>
  );
}