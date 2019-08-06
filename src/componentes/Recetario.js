import React, {Component} from 'react';
import Nav from './Nav';
import Recetas from './Recetas';

class Recetario extends Component {
    render() {
        return (
            <div className="row my-4">
                <Nav 
                    categoria={this.props.categoria}
                />
                <Recetas 
                    recetas={this.props.recetas}
                    mostrarReceta={this.props.mostrarReceta}
                />
            </div>
        )
    }
}
export default Recetario;