import React, { Component } from 'react';
import { Link } from "react-router-dom";



class Nav extends Component {
    render() {
        return (
                <div className="col-4 my-2 justify-content-center d-flex">
                    <nav className="col-12 nav flex-column">

                        <Link to={'/recetas/pasteles'}> <a className="btn btn-success text-white mb-1 btn-block"> Pasteles </a> </Link>
                        <Link to={'/recetas/galletas'}> <a className="btn btn-success text-white mb-1 btn-block"> Galletas </a></Link>
                        <Link to={'/recetas/cremas-Dulces'}> <a className="btn btn-success text-white mb-1 btn-block" > Cremas Dulces  </a></Link>
                        <Link to={'/recetas/bizcochos'}> <a className="btn btn-success text-white mb-1 btn-block" >Bizcochos </a> </Link>
                        <Link to={'/recetas/magdalenas'}> <a className="btn btn-success text-white mb-1 btn-block" > Magdalenas  </a> </Link>
                        <Link to={'/recetas/mousse'}> <a className="btn btn-success text-white mb-1 btn-block" > Mousse  </a> </Link>
                        <Link to={'/recetas/recetas-Faciles'}> <a className="btn btn-success text-white mb-1 btn-block"> Recetas Faciles </a> </Link>
                    </nav>
                </div>
        )
    }
}

export default Nav;