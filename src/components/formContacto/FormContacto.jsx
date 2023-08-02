import React from 'react'
import '../../components/pages/inicio/inicio.css'
import { Input, Form, Col, Row } from 'antd'

const FormContacto = () => {
  const { TextArea } = Input
  return (
    <>
      <section id='form'>
        <Form className='login-form' layout='vertical'>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ alignContent: 'center' }}>
              {/* <div style={{ paddingTop: '20px', width: '100%' }} className='inpName'>
                <h4 className='h-form'>¿Aún tienes dudas? Asesoría y Cotizaciones en 24 hrs.</h4>
  </div> */}
              <h4 className='h-form'>¿Aún tienes dudas? Asesoría y Cotizaciones en 24 hrs.</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className='hidden-sm hidden-xs bs-reset mt-login-5-bsfix'>
              <Form.Item
                name='name' rules={[
                  { max: 50, message: 'Número de caracteres permitidos: 50' },
                  { pattern: /^[^<>]*$/, message: 'Dato inválido, ingresa nuevamente.' }
                ]}
              >
                <Input
                  id='inputName'
                  placeholder='Nombre'
                  name='name'
                  maxLength={51}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11} className='hidden-sm hidden-xs bs-reset mt-login-5-bsfix'>
              <Form.Item
                name='email' rules={[
                  { max: 50, message: 'Número de caracteres permitidos: 50' },
                  { pattern: /^[^<>]*$/, message: 'Dato inválido, ingresa nuevamente.' }
                ]}
              >
                <Input
                  id='inputEmail'
                  placeholder='Email'
                  name='email'
                  maxLength={51}
                />
              </Form.Item>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2} className='hidden-sm hidden-xs bs-reset mt-login-5-bsfix' />
            <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11} className='hidden-sm hidden-xs bs-reset mt-login-5-bsfix'>
              <Form.Item
                name='phone' rules={[
                  { max: 50, message: 'Número de caracteres permitidos: 50' },
                  { pattern: /^[^<>]*$/, message: 'Dato inválido, ingresa nuevamente.' }
                ]}
              >
                <Input
                  id='inputPhone'
                  placeholder='Telefono'
                  name='phone'
                  maxLength={51}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className='hidden-sm hidden-xs bs-reset mt-login-5-bsfix'>
              <Form.Item
                name='asunto' rules={[
                  { max: 50, message: 'Número de caracteres permitidos: 50' },
                  { pattern: /^[^<>]*$/, message: 'Dato inválido, ingresa nuevamente.' }
                ]}
              >
                <Input
                  id='inputaAsunto'
                  placeholder='Asunto'
                  name='Asunto'
                  maxLength={51}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className='hidden-sm hidden-xs bs-reset mt-login-5-bsfix'>
              <Form.Item name='Message'>
                <TextArea autoSize={{ minRows: 12, maxRows: 20 }} className='obs-style' placeholder='Escriba su Mensaje aqui...' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </section>
    </>
  )
}

export default FormContacto
