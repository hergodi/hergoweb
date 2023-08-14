import { Col, Row } from 'antd'
import '../nosotros/nosotros.css'
import N from '../../../assets/img/carrusel/Nosotros_2.jpg'
import N2 from '../../../assets/img/Nosotros-4.jpg'

const Nosotros = () => {
  return (
    <>
      <div id='containerNosotros'>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={10}>
            <h1 className='Nosotros-h1' style={{ fontSize: '35px' }}>¡Bienvenido a Hergo Tu especialista en construcción, diseño e instalación de canceles y vidrios!</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} style={{ position: 'relative', left: '10%' }}>
            <p id='parrafoData'>En Hergo, nos enorgullecemos de ser líderes en el mercado de canceles y vidrios, brindando soluciones innovadoras y personalizadas para transformar tus espacios en lugares únicos y elegantes. Con años de experiencia en la industria, hemos acumulado un amplio conocimiento en el arte de crear diseños sorprendentes y funcionales que satisfacen las necesidades de nuestros clientes más exigentes.
              Nuestro equipo de expertos artesanos y diseñadores altamente capacitados está comprometido con la excelencia en cada proyecto. Ya sea que estés buscando un moderno cancel para tu baño, una mampara de vidrio para tu oficina o una elegante división de ambientes para tu hogar, tenemos la habilidad y la pasión para hacerlo realidad.
              En Hergo, nos esforzamos por ofrecer una experiencia de servicio al cliente excepcional. Desde el momento en que nos contactas hasta la instalación final, trabajamos contigo en cada paso del camino, escuchando tus ideas y necesidades para lograr resultados que superen tus expectativas.
            </p>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <img src={N2} alt='' className='width-img' />
          </Col>
        </Row>
      </div>

      <Row id='Row-Us' style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h1 className='Nosotros-h1' style={{ fontSize: '35px' }}>
              Nuestra dedicación a la calidad
            </h1>
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', display: 'flex' }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <img src={N} alt='' style={{ width: '75%' }} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '30px' }}>
            <p id='parrafoCalidad'>
              y la precisión en cada detalle nos ha permitido ganar la confianza de nuestros clientes,
              quienes nos eligen una y otra vez para sus proyectos de canceles y vidrios. Nuestro compromiso
              con la satisfacción del cliente es inquebrantable y estamos orgullosos de decir que gran parte
              de nuestro negocio proviene de recomendaciones de clientes satisfechos.
              Además de nuestra experiencia en la construcción y diseño, también nos enorgullecemos de ofrecer
              una amplia selección de materiales y acabados,
              para que puedas personalizar cada proyecto y hacerlo verdaderamente único.
            </p>
          </Col>
        </Row>
      </Row>
    </>

  )
}

export default Nosotros
