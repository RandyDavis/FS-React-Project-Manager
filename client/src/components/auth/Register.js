import React, { Component } from 'react';
import axios from 'axios';

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

        // console.log(newUser);
        axios.post('/api/users/register', newUser)
            .then(res => console.log(res.data))
            .catch(err => this.setState({ errors: err.response.data}))
    }

    render() {
        const { errors } = this.state;
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
                                <form noValidate onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input
                                            className={ errors.name ? "form-control form-control-lg is-invalid" : "form-control form-control-lg" }
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.onChange}
                                        />
                                        { errors.name && (<div className="invalid-feedback">{ errors.name }</div>)}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className={ errors.email ? "form-control form-control-lg is-invalid" : "form-control form-control-lg" }
                                            type="text"
                                            placeholder="Email Address"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                        />
                                        { errors.email && (<div className="invalid-feedback">{ errors.email }</div>)}
                                        <small>Use gravatar email to use gravatar profile image</small>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className={ errors.password ? "form-control form-control-lg is-invalid" : "form-control form-control-lg" }
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                        />
                                        { errors.password && (<div className="invalid-feedback">{ errors.password }</div>)}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className={ errors.password2 ? "form-control form-control-lg is-invalid" : "form-control form-control-lg" }
                                            type="password"
                                            placeholder="Confirm Password"
                                            name="password2"
                                            value={this.state.password2}
                                            onChange={this.onChange}
                                        />
                                        { errors.password2 && (<div className="invalid-feedback">{ errors.password2 }</div>)}
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