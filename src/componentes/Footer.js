import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div class="redes-sociales" id="contactos">
                <div class="contenedor-redesSociales">
                    <p class="titulo-redes">Redes Sociales:</p>
                    <a href="#"> <i class="fab fa-facebook"></i>  </a>
                    <a href="#"> <i class="fab fa-twitter"></i> </a>
                    <a href="#"> <i class="fab fa-instagram"></i> </a>
                    <a href="#"> <i class="fab fa-github"></i> </a>
                    <a href="#"> <i class="fab fa-linkedin"></i> </a>
                </div>

                <div class="contacto-contacto">
                    <p class="titulo-otros">Numero de contactos:</p>
                    <p>+58 412 499 97 01</p>
                    <p>+58 412 116 37 90</p>
                </div>

                <div class="contacto-contacto">
                    <p class="titulo-otros">Correo Electronico:</p>
                    <p><a href="#">keyrengel24@gmail.com</a></p>
                    <p><a href="#">beyker24kr@gmail.com</a></p>
                </div>
            </div>

            <div>
                <p>Todos los derechos reservados Autor Keyberth Rengel - Dulces Meriendas</p>

            </div>
    
        </footer>

    )
}
export default Footer;