import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(userData);
    }

    render() {
        return (
            <div className="Login">
                <header id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-12 text-center">
                                <h1>Log In</h1>
                                <small className="lead">Sign in to your account</small>
                            </div>
                        </div>
                    </div>
                </header>

                <section id="login-main">
                    <div className="container">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-6">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            placeholder="Email Address"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <input type="submit" className="btn btn-secondary btn-lg btn-block" value="Log In" />
                                </form>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Login;