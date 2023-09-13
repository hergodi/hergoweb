import React from 'react'
import { Col, Row } from 'antd'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import './../inicio/inicio.css'
import F1 from './../../../assets/img/domosPerolas/domo1.jpg'
import F2 from './../../../assets/img/domosPerolas/domo2.jpg'
import F3 from './../../../assets/img/domosPerolas/domo3.jpg'
import F4 from './../../../assets/img/domosPerolas/domo4.jpg'
import F5 from './../../../assets/img/domosPerolas/perola1.jpg'
import F6 from './../../../assets/img/domosPerolas/perola2.jpg'
import F7 from './../../../assets/img/domosPerolas/perola3.jpg'
import F8 from './../../../assets/img/domosPerolas/perola4.jpg'
import F9 from './../../../assets/img/domosPerolas/perola5.jpg'
import F10 from './../../../assets/img/domosPerolas/perola6.jpg'
import F11 from './../../../assets/img/domosPerolas/perola7.jpg'
import F12 from './../../../assets/img/domosPerolas/perola8.jpg'

export default function Domos () {
  return (
    <div>
      <Row style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', paddingBottom: '40px' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ height: '0', width: '0', display: 'contents', paddingBottom: '30px' }}>
          <h1 className='Seccion-titulos'>
            Domos estructurales, residenciales y pérgolas
          </h1>
        </Col>
      </Row>
      <Row style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', left: '17%', width: '65%' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <AwesomeSlider className='corrusel-react' style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '100%' }}>
            <div data-src={F4} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F3} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F1} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F2} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F5} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F6} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F7} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F8} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F9} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F10} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F12} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F11} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
          </AwesomeSlider>
        </Col>
      </Row>
    </div>
  )
}
