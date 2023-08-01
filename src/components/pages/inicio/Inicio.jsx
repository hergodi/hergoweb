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
import { Col } from 'antd'

const Inicio = () => {
  return (
    <>
      <AwesomeSlider className='corrusel-react'>
        <div data-src={c1} />
        <div data-src={c2} />
        <div data-src={c3} />
      </AwesomeSlider>
      <section id='seccion-inicio'>
        <div className='container-dad'>
          <h1 className='Seccion-titulos'>¡Bienvenido a nuestro sitio web especializado
            en construcción, diseño e
            instalación de canceles y vidrios!
          </h1>
        </div>
        <div className='parrafo-compartido'>
          <p>
            En Hergo, somos apasionados por crear soluciones a la medida para embellecer y mejorar tus espacios. Ya sea que estés buscando darle un toque
            elegante y moderno a tu hogar, o necesitas soluciones funcionales y seguras para tu negocio,
            estamos aquí para ayudarte.
          </p>
        </div>
      </section>

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
            <Link to='hergoweb/contacto'>
              <button className='button-contacto'>Contáctanos</button>
            </Link>
          </div>
        </div>
        <div className='img-section'>
          <img src={imgSecition} alt='' className='img-section4' />
        </div>
      </section>
      <FormContacto />
      <section id='photo'>
        <h4 className='materiales'>FABRICAMOS CON LOS MEJORES MATERIALES</h4>
        <div id='imgsHover'>
          <div className='img-1'> <img src={M1} alt='' className='width-materiales-logo' /></div>
          <div className='img-1'> <img src={M2} alt='' className='width-materiales-logo' /></div>
          <div className='img-1'> <img src={M3} alt='' className='width-materiales-logo' /></div>
        </div>
      </section>
      <section id='contact-section'>
        <div className='contact'>
          <Col className='Display-toLineUp'>
            <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' color='white' fill='currentColor' className='bi bi-telephone' viewBox='0 0 16 16'>
              <path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z' />
            </svg>
            <h1 className='Type'>LLÁMANOS</h1>
          </Col>
          <div className='number'>
            <a href='http://' target='__blank'>555555555555</a>
          </div>
          <Col className='Display-toLineUp'>
            <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' color='white' fill='currentColor' className='bi bi-envelope' viewBox='0 0 16 16'>
              <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z' />
            </svg>
            <h1 className='Type'>ESCRÍBENOS</h1>
          </Col>
          <div className='email'>
            <a href='http://'>email.email@gmail.com</a>
          </div>
          <Col className='Display-toLineUp'>
            <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' color='white' fill='currentColor' className='bi bi-calendar3' viewBox='0 0 16 16'>
              <path d='M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z' />
              <path d='M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
            </svg>
            <h1 className='Type'>HORARIO</h1>
          </Col>
          <div className='horario'>
            <p>Lun-Vie: 09:00-17:00 hrs.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Inicio
