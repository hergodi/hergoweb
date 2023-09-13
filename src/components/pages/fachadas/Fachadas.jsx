import React from 'react'
import { Col, Row } from 'antd'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import './../inicio/inicio.css'
import F1 from './../../../assets/img/fachadas/fachada1.jpg'
import F2 from './../../../assets/img/fachadas/fachada2.jpg'
import F3 from './../../../assets/img/fachadas/fachada3.jpg'
import F4 from './../../../assets/img/fachadas/fachada4.jpg'
import F5 from './../../../assets/img/fachadas/fachada5.jpg'
import F6 from './../../../assets/img/fachadas/fachada6.jpg'
import F7 from './../../../assets/img/fachadas/fachada7.jpg'
import F8 from './../../../assets/img/fachadas/fachada8.jpg'
import F9 from './../../../assets/img/fachadas/fachada9.jpg'
import F10 from './../../../assets/img/fachadas/fachada10.jpg'
import F11 from './../../../assets/img/fachadas/fachada11.jpg'
import F12 from './../../../assets/img/fachadas/fachada12.jpg'
import F13 from './../../../assets/img/fachadas/fachada13.jpg'
import F14 from './../../../assets/img/fachadas/fachada14.jpeg'
import F15 from './../../../assets/img/fachadas/fachada15.jpeg'
import F16 from './../../../assets/img/fachadas/fachada16.jpeg'
import F17 from './../../../assets/img/fachadas/fachada17.jpeg'
import F18 from './../../../assets/img/fachadas/fachada18.jpeg'
import F19 from './../../../assets/img/fachadas/fachada19.jpeg'

export default function Fachadas () {
  return (
    <div>
      <Row style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', paddingBottom: '40px' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ height: '0', width: '0', display: 'contents', paddingBottom: '30px' }}>
          <h1 className='Seccion-titulos'>
            Fachadas suspendidas, mecánicas e integrales
          </h1>
        </Col>
      </Row>
      <Row style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', left: '17%', width: '65%' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <AwesomeSlider className='corrusel-react' style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '100%' }}>
            <div data-src={F1} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F2} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F3} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F4} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F5} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F6} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F7} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F8} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F9} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F10} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F11} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F12} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F13} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F14} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F15} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F16} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F17} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F18} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            <div data-src={F19} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
          </AwesomeSlider>
        </Col>
      </Row>
    </div>
  )
}
