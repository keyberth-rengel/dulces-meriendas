import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Receta extends Component {

    mostrarReceta = () => {
        const receta = this.props.receta;

        this.props.mostrarReceta(receta);
    }
    render() {
        const { img, titulo, descripcion, id } = this.props.receta;
        return (
            <Link to={`recetas/${id}`} onClick={ this.mostrarReceta } className="col-12 d-flex mb-1 p-2 div-receta">
                <div className="col-4 aling-item-center contenedor-img">
                    <img className="img-receta" src={img} alt={titulo} />
                </div>
                <div className="col-8">
                    <h3>{titulo}</h3>
                    {/* <p>Categoria: {categoria}</p> */}
                    <p>  {descripcion}</p>
                </div>
            </Link>
        )
    }
}

export default Receta;