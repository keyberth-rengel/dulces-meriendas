import React, {Component} from 'react';

class View extends Component {
    render() {
        const { img, titulo, ingredientes, preparacion, categoria } = this.props.view;
        return (
           <div className="row m-3 ">
               <div className="col-12 col-md-8 col-lg-8 ">
                    <h2>{titulo}</h2>
                    <p>Categoria: {categoria}</p>
                    <div className="col-12 mb-2">
                        <p>Ingredientes:</p>
                        {
                            ingredientes.map( index => (
                                <li>{index}</li>
                                
                             ) )
                        }
                    </div>
                    <div className="col-12">
                        <p>Preparacion:</p>
                        {
                            preparacion.map( index => (
                                <li>{index}</li>
                                
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