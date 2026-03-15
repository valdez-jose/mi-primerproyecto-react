
import React from 'react'
import { cohete } from '../assets/imagenes'
import '../css/Header.css'

const Header = () => {
  return (
    <>
    <div class="contenedor-header">
      <div className="titulo1">
           <h1>Hola</h1>
           <h1>Soy José</h1>
           
      </div>
      <div className="logo1">
        <img src={cohete} alt="Imagen no encontrado" />
      </div>
      
  </div>
    </>
  )
}

export default Header
