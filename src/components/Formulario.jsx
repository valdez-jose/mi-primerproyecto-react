
import React from 'react'
import '../css/Formulario.css'

const Formulario = () => {
  return (
    <>
      <div className='container'>
       <div class="title-box">
          <h2>Escríbeme</h2>
        </div>

        <form>
          <div className='inputs-row'>
            <input type="text" placeholder="Nombre" required></input>
            <input type="email" placeholder="Correo" required></input>
          </div>
          <textarea placeholder="Mensaje..." required></textarea>
          
          <div className='btn-container'>
             <button type="submit">📩 Enviar</button>
          </div>
        </form>
    </div>
    </>
  )
}

export default Formulario
