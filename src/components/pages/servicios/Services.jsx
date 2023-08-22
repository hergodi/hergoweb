import { Row, Col } from 'antd'
import S from './../../../assets/img/carrusel/Services.jpg'
import './../servicios/hover.css'

const Services = () => {
  return (
    <div>
      <Row className='imgs2-hover' style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <img src={S} id='Service-image' alt='' style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', width: '100%' }} />
        </Col>
      </Row>

      <Row style={{ textAlign: 'center' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ marginTop: '5%', width: '100%' }}>
          <p className='services-responsive' id='styleText'>En Hergo, estamos comprometidos en brindarte soluciones de alta calidad y diseño personalizado en el campo de la construcción, diseño e instalación de canceles y vidrios. Nuestra amplia gama de servicios
            está diseñada para transformar tus espacios en lugares elegantes, modernos y funcionales.
          </p>
        </Col>
      </Row>

      <Row id='Row__Hover' style={{ justifyContent: 'center', textAlign: 'center', marginTop: '30px' }}>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
          <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='currentColor' className='bi bi-buildings' id='Edificio' viewBox='0 0 16 16'>
            <path d='M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z' />
            <path d='M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z' />
          </svg>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
          <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='currentColor' className='bi bi-wallet-fill' viewBox='0 0 16 16'>
            <path d='M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z' />
            <path d='M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z' />
          </svg>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
          <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='currentColor' className='bi bi-window-split' viewBox='0 0 16 16'>
            <path d='M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z' />
            <path d='M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2Zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12ZM1 13V6h6.5v8H2a1 1 0 0 1-1-1Zm7.5 1V6H15v7a1 1 0 0 1-1 1H8.5Z' />
          </svg>
        </Col>
      </Row>

      <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} className='paragraph'>
          <h1 className='textTitle'>Diseño Personalizado</h1>
          <p className='textParagraph'>Trabajamos contigo para dar vida a tus ideas y crear diseños de canceles y vidrios que se adapten perfectamente
            a tu estilo y necesidades. Desde elegantes mamparas de vidrio hasta divisorias de ambientes únicas, nuestro equipo de diseñadores se asegurará
            de que cada detalle refleje tu visión y personalidad.
          </p>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} className='paragraph'>
          <h1 className='textTitle'>Fabricación de Alta Calidad</h1>
          <p className='textParagraph'>Utilizamos materiales de primera calidad y técnicas avanzadas en la fabricación de nuestros productos.
            Cada cancel y vidrio se crea con precisión y atención al detalle para garantizar durabilidad y resistencia. Nuestros expertos artesanos
            se dedican a ofrecerte productos que sean tanto hermosos como funcionales.
          </p>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} className='paragraph'>
          <h1 className='textTitle'>Instalación Profesional</h1>
          <p className='textParagraph'>Nuestro equipo altamente capacitado se encarga de la instalación meticulosa de cada cancel y vidrio.
            Nos aseguramos de que cada pieza se coloque perfectamente y cumpla con los más altos estándares de seguridad. Tu satisfacción y
            tranquilidad son nuestra prioridad mientras transformamos tus espacios.
          </p>
        </Col>
      </Row>

      <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
          <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='currentColor' className='bi bi-tools' viewBox='0 0 16 16'>
            <path d='M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z' />
          </svg>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
          <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='currentColor' className='bi bi-award' viewBox='0 0 16 16'>
            <path d='M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z' />
            <path d='M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z' />
          </svg>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
          <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='currentColor' className='bi bi-globe-americas' viewBox='0 0 16 16'>
            <path d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z' />
          </svg>
        </Col>
      </Row>

      <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} className='paragraph'>
          <h1 className='textTitle'>Mantenimiento y Reparación</h1>
          <p className='textParagraph'>Además de nuestros servicios de diseño y fabricación, también ofrecemos mantenimiento y reparación de canceles y vidrios.
            Si alguna vez necesitas asistencia o una actualización en el futuro, estaremos aquí para brindarte un servicio
            confiable y profesional.
          </p>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} className='paragraph'>
          <h1 className='textTitle'>Compromiso con la Excelencia</h1>
          <p className='textParagraph'>En Hergo, nos enorgullece nuestro compromiso con la excelencia en cada proyecto que emprendemos. Nos esforzamos
            por superar tus expectativas en términos de calidad, diseño y servicio al cliente. Tu satisfacción es nuestra recompensa y estamos ansiosos
            por colaborar contigo en la creación de espacios hermosos y funcionales.
          </p>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} className='paragraph'>
          <h1 className='textTitle'>Diversidad de Servicios</h1>
          <p className='textParagraph'>Ya sea que necesites asesoramiento estratégico, soluciones tecnológicas avanzadas o servicios de consultoría, Hergo es tu socio integral para el crecimiento empresarial.</p>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ fontSize: '20px', textAlign: 'center' }}>
          <p className='textParagraph'>Explora nuestros servicios y descubre cómo Hergo puede hacer realidad tus ideas de diseño y mejorar tus espacios con canceles y
            vidrios de primera calidad. Contáctanos hoy mismo para obtener más información y comenzar a crear ambientes
            impresionantes juntos.
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default Services
