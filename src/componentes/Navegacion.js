import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navegacion extends Component {
    render() {
        return (
            <div className="row justify-content-center d-flex ">

                <div className="col-12 justify-content-md-end justify-content-center">
                    <nav className="col-12 nav justify-content-md-end justify-content-center d-flex ">

                        <Link to={'/'} className="btn btn-link text-white btn-inline-block p-2"> Inicio </Link>
                        <Link to={'/recetas'} className="btn btn-link text-white btn-inline-block p-2"> Recetas </Link>
                        <Link to={'/preguntas'} className="btn btn-link text-white btn-inline-block p-2" >Preguntas </Link>
                    </nav>

                </div>
            </div>
        )
    }
}

export default Navegacion;