import React, {Component} from 'react';
import Receta from './Receta';

class Recetas extends Component {
    render() {
        const recetas = this.props.recetas;
        return (
            <div className="col-12 col-md-7">
                    <p className="col-12 text-center titulo-recetas">{`Recetas faciles de preparar`}</p>
                    {
                        Object.keys(recetas).map( index => (
                            <Receta 
                                key={recetas[index].id}
                                receta={recetas[index]}
                            />
                        ))
                    }
            </div>
        )
    }
}
export default Recetas;