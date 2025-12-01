
import {useState} from 'react'
import '../css/Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className='contenedor-nav'>
      <div className="contenedor-logo">
        <img src="https://preview.redd.it/mr-satans-power-level-v0-ut1n68v67h4e1.jpeg?width=640&crop=smart&auto=webp&s=76af124e8b8b1820e571644bccc74d371efcc3f7" alt="" />
        <p>Soy José</p>
      </div>

       <div 
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        <span className={open ? "line top active" : "line top"}></span>
        <span className={open ? "line middle active" : "line middle"}></span>
        <span className={open ? "line bottom active" : "line bottom"}></span>
      </div>

      
      <nav className={open ? "nav open" : "nav"}>
        <ul>
          <li>Portafolio</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </nav>
  )
}

export default Navbar
