import { Col, Row } from 'antd'
import c1 from '../../../assets/img/carrusel/Carrusel-1.jpg'
import '../nosotros/nosotros.css'

const Nosotros = () => {
  return (
    <>
      <div id='containerNosotros'>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={10}>
              <h1 className='Nosotros-h1'>¡Bienvenido a Hergo Tu especialista en construcción, diseño e instalación de canceles y vidrios!</h1>
            </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <p id='p-1'>En Hergo, nos enorgullecemos de ser líderes en el mercado de canceles y vidrios, brindando soluciones innovadoras y personalizadas para transformar tus espacios en lugares únicos y elegantes. Con años de experiencia en la industria, hemos acumulado un amplio conocimiento en el arte de crear diseños sorprendentes y funcionales que satisfacen las necesidades de nuestros clientes más exigentes.
              Nuestro equipo de expertos artesanos y diseñadores altamente capacitados está comprometido con la excelencia en cada proyecto. Ya sea que estés buscando un moderno cancel para tu baño, una mampara de vidrio para tu oficina o una elegante división de ambientes para tu hogar, tenemos la habilidad y la pasión para hacerlo realidad.
              En Hergo, nos esforzamos por ofrecer una experiencia de servicio al cliente excepcional. Desde el momento en que nos contactas hasta la instalación final, trabajamos contigo en cada paso del camino, escuchando tus ideas y necesidades para lograr resultados que superen tus expectativas.
            </p>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <img src={c1} alt='' className='width-img' />
          </Col>
        </Row>
      </div>
    </>

  )
}

export default Nosotros
