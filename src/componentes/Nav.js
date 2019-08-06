import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div className="col-12 col-md-4 mb-3 justify-content-center d-flex">
                <nav className="col-12 col-md-10 col-lg-8 nav flex-wrap justify-content-center d-flex">

                    <button onClick={ () => { this.props.categoria('pasteles') } } className="col-5 col-md-12 btn btn-success text-white m-1 btn-block botones"> Pasteles </button>
                    <button onClick={ () => { this.props.categoria('galletas') } } className="col-5 col-md-12 btn btn-success text-white m-1 btn-block"> Galletas</button>
                    <button onClick={ () => { this.props.categoria('cremas') } } className="col-5 col-md-12 btn btn-success text-white m-1 btn-block" > Cremas Dulces </button>
                    <button onClick={ () => { this.props.categoria('magdalenas') } } className="col-5 col-md-12 btn btn-success text-white m-1 btn-block" > Magdalenas  </button>
                    <button onClick={ () => { this.props.categoria('varios') } } className="col-5 col-md-12 btn btn-success text-white m-1 btn-block"> Recetas Faciles </button>
                </nav>
            </div>
        )
    }
}

export default Nav;