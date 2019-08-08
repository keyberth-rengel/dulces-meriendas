import React, {Component} from 'react';
import Nav from './Nav';
import Recetas from './Recetas';

class Recetario extends Component {
    render() {
        let spinner = this.props.spinner;
        let mostrar;

        if (spinner) {
            mostrar = <div className="spinner">
                    <p>Buscando...</p>
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>

                    </div>
            
        }else {
            mostrar= <Recetas 
                        recetas={this.props.recetas}
                    />
        }
        return (
            <div className="row my-4">
                <Nav 
                    categoria={this.props.categoria}
                />
                {mostrar}
            </div>
        )
    }
}
export default Recetario;