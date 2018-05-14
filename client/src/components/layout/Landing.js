import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <section className="landing">
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-10 text-center">
                            <h1 className="">Project Front</h1>
                            <p className="lead">Manage projects smarter, not harder</p>
                            <Link to="/register" className="btn btn-lg btn-dark">Sign Up</Link>
                            <Link to="/login" className="btn btn-lg btn-secondary">Login</Link>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Landing;