import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-yellow">
                <div className="container">
                    <Link className="navbar-brand" to="/">Project Front</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarsExampleDefault"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggle-icon">
                            <i className="fas fa-bars"></i>
                        </span>
                    </button>
                    <div className="col-9">
                        <div className="collapse navbar-collapse" id="navbarsDefaultShow">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/employees">Employees</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="collapse navbar-collapse" id="navbarsAccessShow">
                            <ul className="navbar-nav mr-auto navbar-right">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Sign Up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
};

export default Navbar;
