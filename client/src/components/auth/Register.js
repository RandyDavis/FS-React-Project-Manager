import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

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

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
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

        this.props.registerUser(newUser, this.props.history);
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(Register));