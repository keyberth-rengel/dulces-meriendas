import React from 'react';

const Footer = (props) => {
    return (
        <footer className="row justify-content-center m-0">
            <div className="redes-sociales col-12 justify-content-around d-flex" id="contactos">
                <div className="contenedor-redesSociales col-lg-4 col-12 justify-content-center mb-4">
                    <p className="titulo-redes">Redes Sociales:</p>
                    <a href="#"> <i className="fab fa-facebook"></i>  </a>
                    <a href="#"> <i className="fab fa-twitter"></i> </a>
                    <a href="#"> <i className="fab fa-instagram"></i> </a>
                    <a href="#"> <i className="fab fa-github"></i> </a>
                    <a href="#"> <i className="fab fa-linkedin"></i> </a>
                </div>

                <div className="contacto-contacto col-lg-4 col-12 justify-content-center mb-4">
                    <p className="titulo-otros">Numero de contactos:</p>
                    <p>+58 412 499 97 01</p>
                    <p>+58 412 116 37 90</p>
                </div>

                <div className="contacto-contacto col-lg-4 col-12 justify-content-center">
                    <p className="titulo-otros">Correo Electronico:</p>
                    <p><a href="#">keyrengel24@gmail.com</a></p>
                    <p><a href="#">beyker24kr@gmail.com</a></p>
                </div>
            </div>

            <div className="col-12 justify-content-center">
                <p className="text-center m-0">&copy; Todos los derechos reservados 2019</p>
                <p className="text-center m-0">Autor Keyberth Rengel - Dulces Meriendas</p>
            </div>
    
        </footer>

    )
}
export default Footer;