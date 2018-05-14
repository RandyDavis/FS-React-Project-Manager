import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
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

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }

        console.log(newUser);
    }

    render() {
        return (
            <div className="register">
                <header id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-12 text-center">
                                <h1>Sign Up</h1>
                                <small className="lead">Register for an account</small>
                            </div>
                        </div>
                    </div>
                </header>
                <section id="register-main">
                    <div className="container">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-8">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            placeholder="Email Address"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                        />
                                        <small>Use gravatar email to use gravatar profile image</small>
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
                                    <div className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="password"
                                            placeholder="Confirm Password"
                                            name="password2"
                                            value={this.state.password2}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <input type="submit" className="btn btn-secondary btn-lg btn-block mt-20" />
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

export default Register