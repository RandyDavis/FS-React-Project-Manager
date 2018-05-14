import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-yellow">
                <div className="container">
                    <a className="navbar-brand" href="#">Project Front</a>
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
                                    <a className="nav-link" href="employees-all.html">Employees</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="collapse navbar-collapse" id="navbarsAccessShow">
                            <ul className="navbar-nav mr-auto navbar-right">
                                <li className="nav-item">
                                    <a className="nav-link" href="register.html">Sign Up</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="login.html">Login</a>
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
