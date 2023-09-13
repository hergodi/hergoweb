import { Layout } from 'antd'
import './Footer.scss'
import { FECHA_FINAL } from './../utils/constanst'

export default function Footer () {
  const { Footer } = Layout

  return (
    <Footer className='footer'>
      <div className='footer__instituto'>
        Diseñado por: YAYE Consultores
      </div>
      <div className='footer__area'>
        Protección de datos | Compatibilidad óptima con Google Chrome
      </div>
      <div className='footer__version'>
        © Derechos Reservados
        <span>Rev {FECHA_FINAL}</span>
      </div>
    </Footer>
  )
}
