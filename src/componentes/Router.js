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
        spinner: false
    }

    componentWillMount() {
        this.setState({
            recetas: data
        });
    }
    componentDidMount() {
        const varios = [...this.state.recetas];
        let mostrar =  varios.filter( index => (
            index.categoria === "Recetas faciles"
        ) )
        this.setState({
            mostrar
        })
    }
    buscarRecetas = (categoria) => {
        const varios = [...this.state.recetas];
        let mostrar =  varios.filter( index => (
            index.categoria === categoria
        ) )
        this.setState({
            spinner: true
        })
        setTimeout(() => {
            this.setState({
                mostrar,
                spinner: false
            });
            
        }, 1500);
    }
    scroll = () => {
        const arriba = document.getElementById('header');
        arriba.scrollIntoView('auto', 'start');
    }

    render() {
        return (
            <BrowserRouter>
                <div className="header" id="header">
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
                                spinner={this.state.spinner}
                            />

                        )} />
                        <Route exact path="/recetas/:id" render={(props) => {
                         
                         const idReceta = props.location.pathname.replace('/recetas/', '');
                        
                         const varios = [...this.state.recetas];
                            let mostrar =  varios.filter( index => (
                                index.id === idReceta
                            ) )
                            return (
                                <View
                                    view={mostrar[0]}
                                    scroll={this.scroll}
                                />
                            )
                        } } />
                    </Switch>
                </div>

                <Footer />
            </BrowserRouter>
        )
    }
}

export default Router;