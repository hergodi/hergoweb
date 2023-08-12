import { Row, Col } from 'antd'
import S from '../../../assets/img/carrusel/Services.jpg'
import '../servicios/hover.css'

const Services = () => {
  return (
    <>
      <Row className='imgs2-hover' style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <img src={S} alt='' style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', width: '100%', position: 'relative', top: '30px' }} />
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

      <Row id='Row__Hover' style={{ justifyContent: 'center', textAlign: 'center', marginTop: '30px' }}>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-airplane-engines' viewBox='0 0 16 16'>
            <path d='M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z' />
          </svg>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-airplane-engines' viewBox='0 0 16 16'>
            <path d='M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z' />
          </svg>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-airplane-engines' viewBox='0 0 16 16'>
            <path d='M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z' />
          </svg>
        </Col>
      </Row>

      <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} className='paragraph' style={{ }}>
          <p className='textParagraph'>Con años de experiencia en la industria, hemos perfeccionado nuestra artesanía y técnicas para ofrecerte resultados excepcionales.</p>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} className='paragraph'>
          <p className='textParagraph'>Con años de experiencia en la industria, hemos perfeccionado nuestra artesanía y técnicas para ofrecerte resultados excepcionales.</p>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} className='paragraph'>
          <p className='textParagraph'>Con años de experiencia en la industria, hemos perfeccionado nuestra artesanía y técnicas para ofrecerte resultados excepcionales.</p>
        </Col>
      </Row>

      <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-airplane-engines' viewBox='0 0 16 16'>
            <path d='M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z' />
          </svg>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-airplane-engines' viewBox='0 0 16 16'>
            <path d='M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z' />
          </svg>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-airplane-engines' viewBox='0 0 16 16'>
            <path d='M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z' />
          </svg>
        </Col>
      </Row>

      <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} className='paragraph'>
          <p className='textParagraph'>Con años de experiencia en la industria, hemos perfeccionado nuestra artesanía y técnicas para ofrecerte resultados excepcionales.</p>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} className='paragraph'>
          <p className='textParagraph'>Con años de experiencia en la industria, hemos perfeccionado nuestra artesanía y técnicas para ofrecerte resultados excepcionales.</p>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} className='paragraph'>
          <p className='textParagraph'>Con años de experiencia en la industria, hemos perfeccionado nuestra artesanía y técnicas para ofrecerte resultados excepcionales.</p>
        </Col>
      </Row>

    </>
  )
}

export default Services
