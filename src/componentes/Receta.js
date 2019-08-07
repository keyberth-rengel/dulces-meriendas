import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import uuid from 'uuid';

class Receta extends Component {

    mostrarReceta = () => {
        const receta = this.props.receta;
        this.props.mostrarReceta(receta);
    }
    render() {
        const { img, titulo, descripcion } = this.props.receta;
        return (
            <Link to={`recetas/${uuid()}`} onClick={ this.mostrarReceta } className="col-12 d-flex mb-1 p-2 div-receta">
                <div className="col-4 aling-item-center contenedor-img">
                    <img className="img-receta" src={img} alt={titulo} />
                </div>
                <div className="col-8">
                    <h3>{titulo}</h3>
                    <p>  {descripcion}</p>
                </div>
            </Link>
        )
    }
}

export default Receta;