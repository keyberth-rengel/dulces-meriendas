import React, { Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//componentes de la aplicacion
import Header from './Header';
import Nav from './Nav';
import Navegacion from './Navegacion';
import Footer from './Footer';

class Router extends Component {
    render() {
        return (
            <div className='container'>
                <BrowserRouter>
                
                <div className="header">
                        <Navegacion />
                        <Header />
                </div>

                


                        <Switch>
                            <Route exact path={'/'} Component/>

                        </Switch>
                <Footer />
                </BrowserRouter>
            </div>
        )
    }
}

export default Router;