import { Layout } from "antd";
import "./Footer.scss";
import logoINE from "../../assets/img/logo_hergo.jpg";
import {FECHA_FINAL} from './../utils/constanst';


export default function Footer(props) {
  
  const { Footer } = Layout;

  return (
    <Footer className="footer">
      {/* Le puedes asignar un class directamente al componente de ant desig  sino sería ant-layout-footer*/}
      <div className="footer__instituto">
        <img className="footer__logo" src={logoINE} alt="Logo" />
        {/*<div>
           <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> 
          <span>© INE México {props.anio}</span>
          <span>
            <a href="https://cau.ine.mx/" target="blank">
              CAU
            </a>
          </span>
        </div>*/}
      </div>
      <div className="footer__area">
        Protección de datos | Compatibilidad óptima con Google Chrome
      </div>
      <div className="footer__version">
        © Derechos Reservados
        {/*<span>{VERSION_SISTEMA_TEXTO} {VERSION_SISTEMA}</span>*/}
        <span>Rev {FECHA_FINAL}</span>
      </div>
    </Footer>
  );
}
