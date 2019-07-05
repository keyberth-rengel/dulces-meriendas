import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <Link to={'/'}>
            <div className="row">
                <div className="col-12 Header justify-content-center my-4 d-flex m-0">
                    <h1 className="text-white">Dulces Meriendas </h1>
                </div>

            </div>
        </Link>
    )

}
export default Header;