import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navegacion extends Component {
    render() {
        return (
            <div className="row justify-content-center d-flex ">

                <div className="col-12 justify-content-md-end justify-content-center">
                    <nav className="col-12 nav justify-content-md-end justify-content-center d-flex ">

                        <Link to={'/inicio'}> <a className="btn btn-link text-white btn-inline-block p-2"> Inicio </a> </Link>
                        <Link to={'/recetas'}> <a className="btn btn-link text-white btn-inline-block p-2"> Recetas </a></Link>
                        <Link to={''}> <a href="#contactos" className="btn btn-link text-white btn-inline-block p-2" > Social </a></Link>
                        <Link to={'/preguntas'}> <a className="btn btn-link text-white btn-inline-block p-2" >Preguntas</a> </Link>
                    </nav>

                </div>
            </div>
        )
    }
}

export default Navegacion;