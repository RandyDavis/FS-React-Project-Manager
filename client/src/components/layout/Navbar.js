import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }
    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav mr-auto navbar-right">
                <li className="nav-item">
                    <a
                        href=""
                        onClick={this.onLogoutClick.bind(this)}
                        className="nav-link"
                    >
                        <img
                            className="rounded-circle"
                            src={user.avatar}
                            alt={user.name}
                            style={{ width: '25px', marginRight: '5px' }}
                            title="You must have a Gravatar connected to your email in order to display an image"
                        /> {' '} Logout
                    </a>
                </li>
            </ul>
        )

        const guestLinks = (
            <ul className="navbar-nav mr-auto navbar-right">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
        )

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
                            { isAuthenticated ? authLinks : guestLinks }
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
};

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
