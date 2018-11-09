import React, { Component } from 'react';
import Image from '../styles/Images/logo.png';
import {Link} from 'react-router-dom';

class Header extends Component {
 
    render() {
        return (
            <div>

                <div className="row bg-dark">
                    <div className="col-md-12">
                        <p className="pt-2 pl-5 text-white">Contact : +1-000 000 0000</p>
                    </div>
                </div>

                <div className="row bg-primary">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-primary pt-0 pb-0" data-toggle="sticky-onscroll">
                            <a className="navbar-brand" href="#">
                                <img src={Image} alt="logo" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="homepage">Home
                                    <span className="sr-only">(current)</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="about">About</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Services
                                </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link className="dropdown-item" to="about">Serivce A</Link>
                                            <Link className="dropdown-item" to="about">Service B</Link>
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="about">Service C</Link>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;