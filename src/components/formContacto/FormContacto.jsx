import React, {useState} from 'react'
import '../../components/pages/inicio/inicio.css'
import { Input, Form, Col, Row, Button } from 'antd'
import axios from 'axios'
import {USER_MAIL, PASSWD_MAIL, SERVER_MAIL} from './../utils/constanst'
import {enviaCorreo} from './../utils/scripts'


const FormContacto = () => {
  const { TextArea } = Input;
  const { Item } = Form;
  const [form] = Form.useForm();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    //e.preventDefault();

    // Enviar los datos del formulario al servidor aquí
    try {
      const mensajeWhatsApp = `Hola, mi nombre es ${formData.name} y me gustaría una cotización con las siguientes características: ${formData.message} \n Teléfono: ${formData.phone} \n Email: ${formData.email}`;
      const link = `https://api.whatsapp.com/send?phone=525576205492&text=${encodeURIComponent(mensajeWhatsApp)}`;
      window.open(link, '_blank');
      form.resetFields();
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  return (
    <>
      <section id='form'>
        <Form form={form} className='login-form' layout='vertical' onFinish={handleSubmit}>
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
                  { pattern: /^[^<>]*$/, message: 'Dato inválido, ingresa nuevamente.' },
                  {required:true}
                ]}
              >
                <Input
                  id='inputName'
                  placeholder='Nombre'
                  name='name'
                  maxLength={51}
                  value={formData.name} 
                  onChange={handleInputChange}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11} className='hidden-sm hidden-xs bs-reset mt-login-5-bsfix'>
              <Form.Item
                name='email' rules={[
                  { max: 50, message: 'Número de caracteres permitidos: 50' },
                  { pattern: /^[^<>]*$/, message: 'Dato inválido, ingresa nuevamente.' },
                  {required:true}
                ]}
              >
                <Input
                  id='inputEmail'
                  placeholder='Email'
                  name='email'
                  maxLength={51}
                  value={formData.email} 
                  onChange={handleInputChange}
                />
              </Form.Item>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2} className='hidden-sm hidden-xs bs-reset mt-login-5-bsfix' />
            <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11} className='hidden-sm hidden-xs bs-reset mt-login-5-bsfix'>
              <Form.Item
                name='phone' rules={[
                  { max: 50, message: 'Número de caracteres permitidos: 50' },
                  { pattern: /^[^<>]*$/, message: 'Dato inválido, ingresa nuevamente.' },
                  {required:true}
                ]}
              >
                <Input
                  id='inputPhone'
                  placeholder='Telefono'
                  name='phone'
                  maxLength={51}
                  value={formData.phone} 
                  onChange={handleInputChange}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className='hidden-sm hidden-xs bs-reset mt-login-5-bsfix'>
              <Form.Item
                name='asunto' rules={[
                  { max: 50, message: 'Número de caracteres permitidos: 50' },
                  { pattern: /^[^<>]*$/, message: 'Dato inválido, ingresa nuevamente.' },
                  {required:true}
                ]}
              >
                <Input
                  id='inputaAsunto'
                  placeholder='Asunto'
                  name='subject'
                  maxLength={51}
                  value={formData.subject} 
                  onChange={handleInputChange}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className='hidden-sm hidden-xs bs-reset mt-login-5-bsfix'>
              <Form.Item name='Message' rules={[
                  { pattern: /^[^<>]*$/, message: 'Dato inválido, ingresa nuevamente.' },
                  {required:true}
                ]}>
                <TextArea 
                  autoSize={{ minRows: 12, maxRows: 20 }} 
                  className='obs-style' 
                  placeholder='Escriba su Mensaje aqui...'
                  name='message'
                  value={formData.message} 
                  onChange={handleInputChange} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className='hidden-sm hidden-xs bs-reset mt-login-5-bsfix'>
              <Button className="btn primary" type="primary" htmlType="submit">
                Enviar
              </Button>
            </Col>
          </Row>
        </Form>
      </section>
    </>
  )
}

export default FormContacto
