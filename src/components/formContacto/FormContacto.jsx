import React from 'react'
import '../../components/pages/inicio/inicio.css'

const FormContacto = () => {
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
            <label htmlFor='' className='asunto'>Asunto: </label>
            <input type='text' className='typeData' id='type-asunto' />
          </div>
        </div>
        <div className='message'>
          <label htmlFor='' className='asunto'>Asunto: </label>
          <input type='text' className='typeData' id='type-asunto' />
        </div>
      </section>
    </>
  )
}

export default FormContacto
