import React from 'react'
import '../../components/pages/inicio/inicio.css'
import { Input, Form, Col, Row } from 'antd'

const FormContacto = () => {
  const { TextArea } = Input
  return (
    <>
      <section id='form'>
        <h4 className='h-form'>¿Aún tienes dudas? Asesoría y Cotizaciones en 24 hrs.</h4>
        <Form className='login-form'>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='hidden-sm hidden-xs bs-reset mt-login-5-bsfix'>
              <div style={{ paddingTop: '20px', width: '100%' }} className='inpName'>
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
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6.0} sm={5.5} md={5.5} lg={5.3} xl={5.5} xxl={5} className='hidden-sm hidden-xs bs-reset mt-login-5-bsfix'>
              <div style={{ paddingTop: '20px', width: '100%' }} className='inpEmail'>
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
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6.0} sm={5.5} md={5.5} lg={5.3} xl={5.5} xxl={5} className='hidden-sm hidden-xs bs-reset mt-login-5-bsfix'>
              <div style={{ paddingTop: '20px', width: '100%' }} className='inpPhone'>
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
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='hidden-sm hidden-xs bs-reset mt-login-5-bsfix'>
              <div style={{ paddingTop: '20px', width: '100%' }} className='inpAsunto'>
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
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={17} sm={17} md={17} lg={17} xl={9} xxl={17} className='hidden-sm hidden-xs bs-reset mt-login-5-bsfix'>
              <div style={{ paddingTop: '20px', width: '100%' }} className='inpMessage'>
                <Form.Item name='Message'>
                  <TextArea autoSize={{ minRows: 12, maxRows: 20 }} className='obs-style' placeholder='Escriba su Mensaje aqui...' />
                </Form.Item>
              </div>
            </Col>
          </Row>
        </Form>
      </section>
    </>
  )
}

export default FormContacto
