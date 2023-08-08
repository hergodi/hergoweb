import { Row, Col } from 'antd'
import S from '../../../assets/img/carrusel/Services.jpg'

const Services = () => {
  return (
    <>
      <Row style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <img src={S} alt='' style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', width: '100%' }} />
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ marginTop: '5%' }}>
              <h1 style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif', fontSize: '35px' }}>Nuestros Servicios</h1>
              <p style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif', fontSize: '20px' }}>En Hergo, estamos comprometidos en brindarte soluciones de alta calidad y diseño personalizado en el campo de la construcción, diseño e instalación de canceles y vidrios. Nuestra amplia gama de servicios
                está diseñada para transformar tus espacios en lugares elegantes, modernos y funcionales.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Services
