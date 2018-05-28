import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../../components/common/TextFieldGroup';
import HeaderDropdown from '../common/HeaderDropdown';

class RegisterEmployee extends Component {
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
            // this.props.history.push('/dashboard');
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
                <HeaderDropdown heading="Employees" subheading=" Sign Up A New Employee" />
                <section id="breadcrumb">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={"/dashboard"}>Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to={`/employees`}>Employees</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Create Employee</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                <div className="Register-New-Employee container">
                    <div className="card mb-20">
                        <div className="card-header main-color-bg">
                            <h2>Register New Employee</h2>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="lead mtb-5">
                                        Let's add some information so others will know more about you.
                                    </p>
                                    <small className="mb-5">* = required fields</small>
                                    <form noValidate onSubmit={this.onSubmit}>
                                        <TextFieldGroup
                                            placeholder="* Name"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.onChange}
                                            error={errors.name}
                                        />
                                        <TextFieldGroup
                                            placeholder="* Email Address"
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                            info="Use gravatar email to use gravatar profile image"
                                            error={errors.email}
                                        />
                                        <TextFieldGroup
                                            placeholder="* Password"
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                            error={errors.password}
                                        />
                                        <TextFieldGroup
                                            placeholder="* Confirm Password"
                                            type="password"
                                            name="password2"
                                            value={this.state.password2}
                                            onChange={this.onChange}
                                            error={errors.password2}
                                        />
                                        <input type="submit" className="btn btn-secondary btn-lg btn-block mt-20 mb-20" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

RegisterEmployee.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(RegisterEmployee));