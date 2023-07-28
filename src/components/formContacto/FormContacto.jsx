import React from 'react'
import '../../components/pages/inicio/inicio.css'
import { Input,Form, Col,Row } from 'antd'

const FormContacto = () => { 
  const { TextArea } = Input;
  return (
    <>
      <section id='form'>
        <h4 className='h-form'>¿Aún tienes dudas? Asesoría y Cotizaciones en 24 hrs.</h4>
        <div className='form'>
          <div id='formsInp'>
            <div className='name-inp'>
              <label htmlFor=''>Nombre: </label>
              <input type='text' className='nombre' />
            </div>
            <div id='email'>
              <label htmlFor='' className='Email'>Email: </label>
              <input type='text' className='typeData' id='type-email' />
            </div>
            <div id='Telefono'>
              <label htmlFor='' className='Telefono'>Teléfono: </label>
              <input type='number' className='typeData' id='type-phone' />
            </div>
            <div className='Asunto' />
          </div>
          <div id='asunto'>
            <label htmlFor='' className='Telefono'>Asunto: </label>
            <input type='text' className='typeData' id='type-asunto' />
          </div>
        </div>

        <Form className="login-form">
          <Row style={{backgroundColor: "white"}}>
            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} className="hidden-sm hidden-xs bs-reset mt-login-5-bsfix">   
                <div style={{"paddingTop" : "20px", width:"100%"}} className="inicio-sesion-proyecto-campos">
                    <Form.Item name="nombre" rules={[
                                  {max:50, message: "Número de caracteres permitidos: 50"},
                                  {pattern: /^[^<>]*$/ , message:'Dato inválido, ingresa nuevamente.'}
                                ]}>
                        <Input
                          //prefix={<UserOutlined style={{ color: "#d5007f" }}/>}
                          id="inputNombre"
                          placeholder="Nombre"
                          name="nombre"
                          maxLength={51}
                        />
                    </Form.Item>
                </div>      
            </Col>
          </Row>
          <Row style={{backgroundColor: "white"}}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="hidden-sm hidden-xs bs-reset mt-login-5-bsfix">   
                <div style={{"paddingTop" : "20px", width:"100%"}} className="inicio-sesion-proyecto-campos">
                    <Form.Item name="asunto">
                        <TextArea autoSize={{ minRows: 12, maxRows: 20 }} className="obs-style" placeholder='Asunto'/>
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
