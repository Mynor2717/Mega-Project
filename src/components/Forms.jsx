import React from 'react'

const Forms = () => {
  return (
    <>
    <form action="" className='forms'>
        <h3>Formulario</h3>
        <input type="text" placeholder='Name'/>
        <input type="email" name="" id="" placeholder='Email'/>
        <input type="text" placeholder='Phone Number'/>
        <input type="text" placeholder='subject'/>
        <input type="text" className='mensaje' placeholder='Message'/>
        <input type="submit" className='Enviar' placeholder='Enviar'/>
    </form>
    </>
  )
}

export default Forms