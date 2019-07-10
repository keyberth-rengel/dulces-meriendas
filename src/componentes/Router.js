import React, { Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//componentes de la aplicacion
import Header from './Header';
import Navegacion from './Navegacion';
import Inicio from './Inicio';
import Preguntas from './Preguntas';
import Footer from './Footer';

class Router extends Component {

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

                    </Switch>
                </div>

                <Footer />
            </BrowserRouter>
        )
    }
}

export default Router;