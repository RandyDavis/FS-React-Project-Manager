import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';

class CreateProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            handle: '',
            projects: [],
            title: '',
            team: '',
            location: '',
            skills: '',
            from: '',
            bio: '',
            currentAvailability: '',
            errors: {}
        }
    }
    render() {
        return (
            <div>
                <header id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-10 col-md-10">
                                <h1>
                                    <i className="fas fa-cog"></i> Employees
                                    <small>- Manage Profile</small>
                                </h1>
                            </div>
                            <div className="col-xs-2 col-md-2">
                                <Link className="btn btn-secondary mtop-5" id="backButton" to='/dashboard'>
                                    Back to Dashboard
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
                <section id="breadcrumb">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Profile</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                <div className="container">

                </div>
            </div>
        )
    }
}

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
})

export default connect(mapStateToProps, {})(CreateProfile);