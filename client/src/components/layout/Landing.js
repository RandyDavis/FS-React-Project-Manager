import React, { Component } from 'react';

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
                            <a href="register.html" className="btn btn-lg btn-dark">Sign Up</a>
                            <a href="login.html" className="btn btn-lg btn-secondary">Login</a>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Landing;