import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import '../inicio/inicio.css'
import imgSecition from '../../../assets/img/IMG_SECTION_4.jpg'
import c1 from '../../../assets/img/carrusel/Carrusel-1.jpg'
import c2 from '../../../assets/img/carrusel/Carrusel-2.jpg'
import c3 from '../../../assets/img/carrusel/Carrusel-3.jpg'
import Link from 'antd/es/typography/Link'

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
            <Link to='/contacto'>
              <button className='button-contacto'>Contactanós</button>
            </Link>
          </div>
        </div>
        <div className='img-section'>
          <img src={imgSecition} alt='' className='img-section4' />
        </div>
      </section>
    </>
  )
}

export default Inicio
