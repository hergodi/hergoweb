import React from 'react'
import { Col, Row } from 'antd'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import './../inicio/inicio.css'
import R2 from './../../../assets/img/residencial/Residencial2.jpeg'
import R3 from './../../../assets/img/residencial/Residencial3.jpeg'
import R4 from './../../../assets/img/residencial/Residencial4.jpeg'
import R5 from './../../../assets/img/residencial/Residencial5.jpeg'
import R6 from './../../../assets/img/residencial/Residencial6.jpeg'
import R7 from './../../../assets/img/residencial/Residencial7.jpeg'
import R8 from './../../../assets/img/residencial/Residencial8.jpeg'
import R9 from './../../../assets/img/residencial/Residencial9.jpeg'
import R10 from './../../../assets/img/residencial/Residencial10.jpeg'
import R11 from './../../../assets/img/residencial/Residencial11.jpeg'
import R12 from './../../../assets/img/residencial/Residencial12.jpeg'
import R13 from './../../../assets/img/residencial/Residencial13.jpeg'
import R14 from './../../../assets/img/residencial/Residencial14.jpeg'
import R15 from './../../../assets/img/residencial/Residencial15.jpeg'
import R16 from './../../../assets/img/residencial/Residencial16.jpeg'
import R17 from './../../../assets/img/residencial/Residencial17.jpeg'
import R18 from './../../../assets/img/residencial/Residencial18.jpeg'
import R19 from './../../../assets/img/residencial/Residencial19.jpeg'
import R20 from './../../../assets/img/residencial/Residencial20.jpeg'
import R21 from './../../../assets/img/residencial/Residencial21.jpeg'
import R22 from './../../../assets/img/residencial/Residencial22.jpeg'
import R23 from './../../../assets/img/residencial/Residencial23.jpeg'
import R24 from './../../../assets/img/residencial/Residencial24.jpeg'


export default function Residencial () {
  return (
    <div>
        <Row style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', paddingBottom: '40px' }}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ height: '0', width: '0', display: 'contents', paddingBottom: '30px' }}>
                <h1 className='Seccion-titulos'>
                    Cancelería residencial e interiores
                </h1>
            </Col>
        </Row>
        <Row style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', left: '17%', width: '65%' }}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <AwesomeSlider className='corrusel-react' style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '100%' }}>
                <div data-src={R6} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R2} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R3} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R4} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R5} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />                
                <div data-src={R7} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R8} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R9} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R10} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R11} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R12} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R13} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R14} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R15} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R16} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R17} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R18} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R19} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R20} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R21} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R22} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R23} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
                <div data-src={R24} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />

            </AwesomeSlider>
            </Col>
        </Row>
    </div>
  )
}
