import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../../common/TextFieldGroup';

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
                                    <TextFieldGroup
                                        placeholder="Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextFieldGroup
                                        placeholder="Email Address"
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        info="Use gravatar email to use gravatar profile image"
                                        error={errors.email}
                                    />
                                    <TextFieldGroup
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                        error={errors.password}
                                    />
                                    <TextFieldGroup
                                        placeholder="Confirm Password"
                                        type="password"
                                        name="password2"
                                        value={this.state.password2}
                                        onChange={this.onChange}
                                        error={errors.password2}
                                    />
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