import React, { Component } from 'react';
import { Link } from "react-router-dom";



class Nav extends Component {
    render() {
        return (
                <div className="col-4 my-2 justify-content-center d-flex">
                    <nav className="col-12 nav flex-column">

                        <Link to={'/recetas/pasteles'} className="btn btn-success text-white mb-1 btn-block"> Pasteles </Link>
                        <Link to={'/recetas/galletas'} className="btn btn-success text-white mb-1 btn-block"> Galletas</Link>
                        <Link to={'/recetas/cremas-Dulces'} className="btn btn-success text-white mb-1 btn-block" > Cremas Dulces </Link>
                        <Link to={'/recetas/bizcochos'} className="btn btn-success text-white mb-1 btn-block" >Bizcochos </Link>
                        <Link to={'/recetas/magdalenas'} className="btn btn-success text-white mb-1 btn-block" > Magdalenas  </Link>
                        <Link to={'/recetas/mousse'} className="btn btn-success text-white mb-1 btn-block" > Mousse  </Link>
                        <Link to={'/recetas/recetas-Faciles'} className="btn btn-success text-white mb-1 btn-block"> Recetas Faciles </Link>
                    </nav>
                </div>
        )
    }
}

export default Nav;