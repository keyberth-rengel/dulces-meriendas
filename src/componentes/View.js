import React, {Component} from 'react';

class View extends Component {
    render() {
        const { img, titulo, ingredientes, preparacion, categoria, crema = [], adicional = "" } = this.props.view;
        
        return (
           <div className="row m-3 ">
               <div className="col-12 col-md-8 col-lg-8 ">
                    <h2>{titulo}</h2>
                    <p><strong>Categoria:</strong> {categoria}</p>
                    <div className="col-12 mb-2 p-3">
                        <p><strong>Ingredientes:</strong></p>
                        {
                            ingredientes.map( (index,posicion)  => (
                                
                                <li key={posicion}>{index}</li>

                             ) )
                        }
                    </div>
                    <div className="col-12 mt-2 p-3 preparacion">
                        <p><strong>Preparacion:</strong></p>
                        {
                            preparacion.map( (index,po) => (

                                <li key={po} >{index}</li>
                                
                             ) )
                        }
                    </div>
                    <div className="col-12 mt-2 p-3">
                    <p><strong>{adicional}</strong></p>
                        {
                            crema.map( (index,po) => (

                                <li key={po} >{index}</li>
                                
                             ) )
                        }
                    </div>
                    
               </div>
               <div className="col-12 col-md-4 col-lg-4">
                    <img className="img-completa pt-4" src={`../${img}`} alt={titulo} />

               </div>


            </div>
        )
    }
}

export default View;