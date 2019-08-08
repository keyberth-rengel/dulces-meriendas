import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navegacion extends Component {
    render() {
        return (
            <div className="row justify-content-center d-flex ">

                <div className="col-12 justify-content-md-end justify-content-center">
                    <nav className="col-12 nav justify-content-md-end justify-content-center d-flex navegacion">

                        <Link to={'/'} className="btn btn-link btn-inline-block p-2 enlace"> Inicio </Link>
                        <Link to={'/recetas'} className="btn btn-link btn-inline-block p-2 enlace"> Recetas </Link>
                        <Link to={'/preguntas'} className="btn btn-link btn-inline-block p-2 enlace" >Preguntas </Link>
                    </nav>

                </div>
            </div>
        )
    }
}

export default Navegacion;