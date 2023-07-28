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
              <div style={{ paddingTop: '20px', width: '100%' }} className='inicio-sesion-proyecto-campos'>
                <Form.Item
                  name='nombre' rules={[
                    { max: 50, message: 'Número de caracteres permitidos: 50' },
                    { pattern: /^[^<>]*$/, message: 'Dato inválido, ingresa nuevamente.' }
                  ]}
                >
                  <Input
                    id='inputNombre'
                    placeholder='Nombre'
                    name='nombre'
                    maxLength={51}
                  />
                </Form.Item>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className='hidden-sm hidden-xs bs-reset mt-login-5-bsfix'>
              <div style={{ paddingTop: '20px', width: '100%' }} className='inicio-sesion-proyecto-campos'>
                <Form.Item name='asunto'>
                  <TextArea autoSize={{ minRows: 12, maxRows: 20 }} className='obs-style' placeholder='Asunto' />
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
