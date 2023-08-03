import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import '../inicio/inicio.css'
import imgSecition from '../../../assets/img/IMG_SECTION_4.jpg'
import c1 from '../../../assets/img/carrusel/Carrusel-1.jpg'
import c2 from '../../../assets/img/carrusel/Carrusel-2.jpg'
import c3 from '../../../assets/img/carrusel/Carrusel-3.jpg'
import M1 from '../../../assets/img/logos_materiales/Cuprum-logo.png'
import M2 from '../../../assets/img/logos_materiales/vitro-logo.png'
import M3 from '../../../assets/img/logos_materiales/saint-logo.png'
import Link from 'antd/es/typography/Link'
import FormContacto from '../../formContacto/FormContacto'
import { Col, Row } from 'antd'

const Inicio = () => {
  return (

    <div className='div-inicio'>

      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ alignContent: 'center' }}>
          <AwesomeSlider className='corrusel-react'>
            <div data-src={c1} />
            <div data-src={c2} />
            <div data-src={c3} />
          </AwesomeSlider>
        </Col>
      </Row>

      <Row id='Row-center'>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} className='center-text' />
        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} className='center-text'>
          <h1 className='Seccion-titulos'>¡Bienvenido a nuestro sitio web especializado
            en construcción, diseño e
            instalación de canceles y vidrios!
          </h1>
        </Col>
        <Col xs={16} sm={16} md={16} lg={16} xl={16} xxl={16} className='center-text'>
          <p id='p-1'>
            En Hergo, somos apasionados por crear soluciones a la medida para embellecer y mejorar tus espacios. Ya sea que estés buscando darle un toque
            elegante y moderno a tu hogar, o necesitas soluciones funcionales y seguras para tu negocio,
            estamos aquí para ayudarte.
          </p>
        </Col>
      </Row>

      <section id='section-2'>
        <div className='text-2'>
          <h1 className='experiencia'>Nuestra experiencia</h1>
          <p className='p-experiencia'>Nuestra experiencia en la industria nos permite ofrecerte una amplia gama de servicios, desde el diseño personalizado de canceles y vidrios hasta su fabricación e instalación
            impecable. Trabajamos con materiales de la más alta calidad,
            asegurando resultados duraderos y satisfactorios.
          </p>
        </div>
        <div className='text-3'>
          <h2 className='destacar'>
            ¿Qué nos hace destacar?
          </h2>
          <p className='p-destacar'>
            Nuestro equipo altamente capacitado y dedicado, que se esfuerza por superar tus expectativas en cada proyecto.
            Estamos comprometidos con la excelencia en el
            servicio al cliente, brindando atención personalizada y asesoramiento experto en cada paso del proceso.
          </p>
        </div>
        <div className='unico-parrafo'>
          <p className='parrafo-3'>
            Explora nuestra galería de proyectos para inspirarte y descubrir cómo hemos transformado diversos
            espacios en impresionantes obras maestras. Desde elegantes mamparas de vidrio hasta
            modernos canceles para baños, cada proyecto es único y refleja el estilo y las necesidades de nuestros clientes.
          </p>
        </div>
        <div className='ideas'>
          <h3 className='ideas-h'>¿Tienes alguna idea en mente o necesitas asesoramiento para dar vida a tu proyecto?</h3>
          <p className='p-ideas'>Contáctanos y uno de nuestros expertos estará encantado de asesorarte y ofrecerte un presupuesto sin compromiso.</p>
        </div>
      </section>

      <section id='section-3'>
        <div className='text-4'>
          <h2 className='confianza'>
            ¡Confía en Hergo!
          </h2>
          <p className='p-confianza'>para convertir tus sueños en realidad y crear ambientes que te enamoren! Estamos
            ansiosos por colaborar contigo en tu próximo proyecto de canceles y vidrios.
          </p>
          <div className='bottom-Contactos'>
            <Link to='hergoweb/contacto' className='link-3'>Contacto</Link>
          </div>
        </div>
        <div className='img-section'>
          <img src={imgSecition} alt='' className='img-section4' />
        </div>
      </section>
      <FormContacto />
      <section id='photo'>
        <div id='txtHover'>
          <h4 className='materiales'>FABRICAMOS CON LOS MEJORES MATERIALES</h4>
        </div>
        <div id='imgsHover'>
          <div className='img-1'> <img src={M1} alt='' className='width-materiales-logo' /></div>
          <div className='img-1'> <img src={M2} alt='' className='width-materiales-logo' /></div>
          <div className='img-1'> <img src={M3} alt='' className='width-materiales-logo' /></div>
        </div>
      </section>
    </div>
  )
}

export default Inicio
