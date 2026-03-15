
import '../css/Footer.css'
import {compu2, casa, linkedin, portafolio2, github, twitter, contacto1 } from '../assets/imagenes.js'


const Footer = () => {
  return (
    <>
        <footer className="footer">
        <div className="footer-logo">
          <img src={compu2} alt="imagen de computadora" />
          <p>Soy José</p>
        </div>

        <nav className="footer-nav">
          <a href="#" className="item-inline">
            <img src={casa} alt="imagen de casa" />
            <span>Home</span>
          </a>
          <a href="#" className="item-inline">
            <img src={portafolio2} alt="imagen de portafolio" />
            <span>Servicios</span>
          </a>
          <a href="#" className="item-inline">
            <img src={contacto1} alt="" />
            <span>Contacto</span>
          </a>
        </nav>

        <nav className="footer-social">
          <a href="#"><img src={linkedin} alt="" /></a>
          <a href="#"><img src={github} alt="" /></a>
          <a href="#"><img src={twitter} alt="" /></a>
        </nav>

        <p className="copy">&copy; 2025 Aguante Pincharrata</p>
      </footer>
    </>
  )
}

export default Footer
