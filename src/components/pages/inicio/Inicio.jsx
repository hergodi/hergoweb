import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../inicio/inicio.css'
import c1 from '../../../assets/img/carrusel/Carrusel-1.jpg'
import c2 from '../../../assets/img/carrusel/Carrusel-2.jpg'
import c3 from '../../../assets/img/carrusel/Carrusel-3.jpg'

const Inicio = () => {
  
  return (
    <>
    <AwesomeSlider className='corrusel-react' >
    <div data-src={c1} />
    <div data-src={c2} />
    <div data-src={c3} />
  </AwesomeSlider>
    </>

  )
}

export default Inicio