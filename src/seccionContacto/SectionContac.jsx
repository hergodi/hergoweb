import React from 'react'
import { Col, Row } from 'antd'
import '../seccionContacto/sectionContact.css'

const SectionContac = () => {
  return (
    <section id='contact-section' style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
      <Row style={{ display: 'flex' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Row>
            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
              <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' color='white' fill='currentColor' className='bi bi-telephone' viewBox='0 0 16 16' id='whatsapp'>
                <path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z' />
              </svg>
              <h1 className='Type'>LLÁMANOS</h1>
            </Col>
            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
              <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' color='white' fill='currentColor' className='bi bi-envelope' viewBox='0 0 16 16' id='Gmail'>
                <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z' />
              </svg>
              <h1 className='Type'>ESCRÍBENOS</h1>

            </Col>
            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
              <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' color='white' fill='currentColor' className='bi bi-calendar3' viewBox='0 0 16 16' id='Calendario'>
                <path d='M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z' />
                <path d='M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
              </svg>
              <h1 className='Type'>HORARIO</h1>
            </Col>
          </Row>

          <Row>
            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
              <div className='number'>
                <a href='https://wa.me/525576205492' target='_blank' rel='noreferrer'><p className='Type' style={{ marginBottom: '9px', marginTop: '5px' }}> 55 7620 5492</p></a>
              </div>
            </Col>
            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
              <div className='email'>
                <a href='https://mail.google.com/mail/?view=cm&to=hergo.ventas@outlook.com' target='_blank' rel='noreferrer'><p className='Type' style={{ marginBottom: '9px', marginTop: '5px' }}>hergo.ventas@outlook.com</p></a>
              </div>
            </Col>

            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} style={{ height: '1px' }}>
              <div className='horario'>
                <p className='Type' style={{ marginBottom: '9px', marginTop: '5px' }}>Lun-Vie: 09:00-17:00 hrs.</p>
              </div>
            </Col>
          </Row>
        </Col>

      </Row>
    </section>
  )
}

export default SectionContac
