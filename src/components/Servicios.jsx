
import React from 'react'
import '../css/Servicios.css'

const Servicios = () => {
  return (
    <>
    <section className="contenedor__cards">
        
            <h2>Mi Servicios</h2>

        <div className="contenido-cards">
        
            <article className="card-item">
            <img src="https://www.arpynet.com/wp-content/uploads/2018/07/desarrollo-web-ciencia-activa.png" alt="Proyecto 1" />
            <h4>Desarrollo de paginas web</h4>
            <p>Creacion de paginas webs, totalmente responsive y mobile first. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit.</p>
            </article>

            <article className="card-item">
            <img src="https://www.thatzblog.com/wp-content/uploads/2019/03/Diseno-web.jpg" alt="Proyecto 2" />
            <h4>Animaciones para webs</h4>
            <p>Animaciones personalizadas con CSS , JS y Frameworks. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Aenean lobortis posuere tristique.</p>
            </article>

            <article className="card-item">
            <img src="https://cheso.com.py/img/celulares.png" alt="Proyecto 3" />
            <h4>Desarrollo de apps</h4>
            <p>Algo interesante sobre mi Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Nulla dui quam, sollicitudin at enim id, sodales vehicula velit. Aenean lobortis posuere tristique.</p>
            </article>
        </div>
    </section>
    </>
  )
}

export default Servicios
