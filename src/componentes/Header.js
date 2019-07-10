import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        
        <div className="row justify-content-center">
            <Link to={'/'}>
                <div className="col-12 dulces justify-content-center d-flex ">
                    <p className="text-white m-0">Dulces Meriendas</p>
                </div>
            </Link>
        </div>
    )
}
export default Header;