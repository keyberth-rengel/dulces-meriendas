import React, { Component } from 'react';


class Inicio extends Component {
    render() {
        return (

                <div className="row justify-content-center">

                    <header className="col-12 justify-content-center ">
                        <h1 className=" col-12 text-center my-4">Bienvenido a dulces Meriendas.</h1>
                        <p className="m-0 my-3 col-12 text-center">  La cocina es un espacio abierto a la creatividad, a la vez que regido por una fuerte estructura de tradiciones y reglas. Es una combinación peculiar de rigidez y flexibilidad que como cualquier otro campo del conocimiento, en especial los artísticos evoluciona gracias a la genialidad de esos pocos que se atreven a ir en contra de las imposiciones.
                        </p>
                    </header>
                    <div className="col-12 mb-3">
                        <div className="row no-gutters">
                            <div className="col-12 col-md-5 my-3">
                                <img src="img/ingredientes.jpg" width="450" className="col-12 card-img" alt="Ingredientes" />
                            </div>
                            <div className="col-12 col-md-7 my-3">
                                <div className="col-12 card-body">
                                    <h5 className="card-title">Ingredientes</h5>
                                    <p className="card-text"> En el mundo culinario, una receta especifica qué ingredientes son necesarios para preparar un plato determinado. Muchos productos comerciales contienen un "ingrediente secreto" que los diferencia de los productos de la competencia. Aqui Te mostraremos cada uno de los ingredientes y materiales que utilizaremos para la preparacion de los postres, todos los ingredientesson faciles de encontrar.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-5 my-3 justify-content-center">
                                <img src="img/preparacion.jpg" width="450" className="col-12 card-img" alt="preparacion" />
                            </div>
                            
                            <div className="col-12 col-md-7 my-3 justify-content-center">
                                <div className="col-12 card-body justify-content-center">
                                    <h5 className="card-title">Preparacion</h5>
                                    <p className="card-text">Es un proceso que se hace antes de realizar una actividad en la cocina pero la preparación son todos esos pasos que se realizan para poder llegar a él con éxito, es decir, es la mezcla de los ingredientes para realizar satisfactoriamente una comida más elaborada, para ello se necesita la preparación tanto de los utensilios de cocina como la de los ingredientes. Normalmente cuando se quiere ejecutar una receta se realiza una serie de pasos los cuales sirven de guía. Aqui Vamos a ir paso a paso en la preparacion de cada uno de los postres a realizar. </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 mb-3">
                        <div className="row no-gutters">
                            <div className="col-12 col-md-5 my-3">
                                <img src="img/torta-pina.jpg" width="450" className="col-12 card-img" alt="terminado" />
                            </div>
                            <div className="col-12 col-md-7 my-3">
                                <div className="col-12 card-body">
                                    <h5 className="card-title">Terminado</h5>
                                    <p className="card-text">Al haber unido cada uno de los ingredientes correctamente como lo indica la receta
                                    pasos a paso podremos obtener el resultado final nuestro delicioso postre, al primer intento no te saldra del todo bonito pero si que sera muy sabroso poco a poco con la practica veras resultados mejores en la preparacion</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Inicio;