import React, { Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//data
import data from '../data/data.json';
//componentes de la aplicacion
import Header from './Header';
import Navegacion from './Navegacion';
import Inicio from './Inicio';
import Preguntas from './Preguntas';
import Recetario from './Recetario';
import View from './View';
import Footer from './Footer';

class Router extends Component {

    state = {
        mostrar: [],
        recetas: [],
        view: []
    }

    componentWillMount() {
        this.setState({
            recetas: data,
            mostrar: data.varios
        });
    }
    
    buscarRecetas = (categoria) => {
        const varios = {...this.state.recetas};
        this.setState({
            mostrar: varios[categoria]
        });
    }

    mostrarReceta = (receta) => {
        this.setState({
            view: receta
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="header">
                    <div className="container">
                        <Navegacion />
                        <Header />
                    </div>
                </div>

                <div className="container">
                    <Switch>
                        <Route exact path="/" render={() => (

                            <Inicio />

                        )} />
                        <Route exact path="/preguntas" render={() => (

                            <Preguntas />

                        )} />

                        <Route exact path="/recetas" render={() => (

                            <Recetario 
                                categoria= {this.buscarRecetas}
                                recetas={this.state.mostrar}
                                mostrarReceta={this.mostrarReceta}
                            />

                        )} />
                        <Route exact path="/recetas/:id" render={() => (

                            <View
                                view={this.state.view}
                            />

                        )} />
                    </Switch>
                </div>

                <Footer />
            </BrowserRouter>
        )
    }
}

export default Router;