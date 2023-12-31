import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import './../inicio/inicio.css'
import imgSecition from './../../../assets/img/IMG_SECTION_4.jpg'
import c0 from './../../../assets/img/carrusel/Carrusel-0.jpeg'
import c1 from './../../../assets/img/carrusel/Carrusel-1.jpeg'
import c2 from './../../../assets/img/carrusel/Carrusel-2.jpeg'
import c3 from './../../../assets/img/carrusel/Carrusel-3.jpeg'
import c4 from './../../../assets/img/carrusel/Carrusel-4.jpeg'
import c5 from './../../../assets/img/carrusel/Carrusel-5.jpeg'
import c6 from './../../../assets/img/carrusel/Carrusel-6.jpeg'
import M1 from './../../../assets/img/logos_materiales/Cuprum-logo.png'
import M2 from './../../../assets/img/logos_materiales/vitro-logo.png'
import M3 from './../../../assets/img/logos_materiales/saint-logo.png'
import M4 from './../../../assets/img/logos_materiales/extrusiones_logo.jpg'
import FormContacto from './../../formContacto/FormContacto.jsx'
import { Col, Row } from 'antd'

const Inicio = () => {
  return (

    <div>
      <Row style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', paddingBottom: '40px' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ height: '0', width: '0', display: 'contents', paddingBottom: '30px' }}>
          <h1 className='Seccion-titulos'>
            ¡Bienvenido a nuestro sitio web especializado
            en construcción, diseño e
            instalación de canceles y vidrios!
          </h1>
        </Col>
      </Row>
      <Row style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', left: '17%', width: '65%' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <AwesomeSlider className='corrusel-react' style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '100%' }}>
            <div data-src={c0} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={c1} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={c2} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={c3} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={c4} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={c5} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={c6} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
          </AwesomeSlider>
        </Col>
      </Row>

      <Row id='Row-center' style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ alignItems: 'center', justifyContent: 'center', position: 'relative', textAlign: 'center' }}>
          <p id='p-1'>
            En Hergo, somos apasionados por crear soluciones a la medida para embellecer y mejorar tus espacios. Ya sea que estés buscando darle un toque
            elegante y moderno a tu hogar, o necesitas soluciones funcionales y seguras para tu negocio,
            estamos aquí para ayudarte.
          </p>
        </Col>
      </Row>

      <Row id='section-2' style={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', alignContent: 'center', color: 'white', minWidth: '10%' }}>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} style={{ padding: '15px' }}>
          <h1 className='classComprtida' style={{ textAlign: 'center' }}>Nuestra experiencia</h1>
          <p className='classComprtidaParrafos' style={{ textAlign: 'center' }}>
            Nuestra experiencia en la industria nos permite ofrecerte una amplia gama de servicios, desde el diseño personalizado de canceles y vidrios hasta su fabricación e instalación
            impecable. Trabajamos con materiales de la más alta calidad,
            asegurando resultados duraderos y satisfactorios.
          </p>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} style={{ padding: '15px' }}>
          <h2 className='classComprtida' style={{ textAlign: 'center' }}>
            ¿Qué nos hace destacar?
          </h2>
          <p className='classComprtidaParrafos' style={{ textAlign: 'center' }}>
            Nuestro equipo altamente capacitado y dedicado, que se esfuerza por superar tus expectativas en cada proyecto.
            Estamos comprometidos con la excelencia en el
            servicio al cliente, brindando atención personalizada y asesoramiento experto en cada paso del proceso.
          </p>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} style={{ padding: '15px' }}>
          <h2 className='classComprtida' style={{ textAlign: 'center' }}>
            ¡Conócenos!
          </h2>
          <p className='classComprtidaParrafos' style={{ textAlign: 'center' }}>
            Explora nuestra galería de proyectos para inspirarte y descubrir cómo hemos transformado diversos
            espacios en impresionantes obras maestras. Desde elegantes mamparas de vidrio hasta
            modernos canceles para baños, cada proyecto es único y refleja el estilo y las necesidades de nuestros clientes.
          </p>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} style={{ padding: '15px' }}>
          <h3 className='classComprtida' style={{ textAlign: 'center' }}>
            ¿Tienes alguna idea en mente o necesitas asesoramiento para dar vida a tu proyecto?
          </h3>
          <p className='classComprtidaParrafos' style={{ textAlign: 'center' }}>
            Contáctanos y uno de nuestros expertos estará encantado de asesorarte y ofrecerte un presupuesto sin compromiso.
          </p>
        </Col>
      </Row>
      {/* mejorando el "Confia en Hergo" */}

      <div id='ToDoList' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '4%' }}>
        <Row style={{ position: 'relative', left: '4%' }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} style={{ position: 'relative', top: '5 0px' }}>
            <h2 className='Seccion-titulos'>
              ¡Confía en Hergo!
            </h2>
            <p className='p-confianza' style={{ }}>
              Para convertir tus sueños en realidad y crear ambientes que te enamoren! Estamos
              ansiosos por colaborar contigo en tu próximo proyecto de canceles y vidrios.
            </p>
          </Col>
          <Col className='Responsive-img' xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} style={{ width: '100%', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
            <img src={imgSecition} alt='' className='Responsive-img' style={{ width: '75%' }} />
          </Col>
        </Row>
      </div>

      {/* Aqui termina */}
      <FormContacto />
      <Row id='photo' style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', minWidth: '400px' }}>
          <h4 className='materiales'>FABRICAMOS CON LOS MEJORES MATERIALES</h4>
        </Col>
      </Row>

      <Row id='imgsHover' style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} style={{ padding: '30px', minWidth: '400px' }}>
          <img src={M1} alt='' className='width-materiales-logo' />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} style={{ padding: '30px', minWidth: '400px' }}>
          <img src={M2} alt='' className='width-materiales-logo' />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} style={{ padding: '30px', minWidth: '400px' }}>
          <img src={M3} alt='' className='width-materiales-logo' />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} style={{ padding: '30px', minWidth: '400px' }}>
          <img src={M4} alt='' className='width-materiales-logo' />
        </Col>
      </Row>

    </div>
  )
}

export default Inicio
