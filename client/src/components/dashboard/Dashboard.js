import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';
import Spinner from '../../common/Spinner';

class Dashboard extends Component {
    componentDidMount() {
        this.props.getCurrentProfile();
    }

    render() {
        const { user } = this.props.auth;
        const { profile, loading } = this.props.profile;

        let dashBoardContent;

        if (profile === null || loading) {
            dashBoardContent = <Spinner />
        } else {
            // Check if logged in user has profile data
            if (Object.keys(profile).length > 0) {
                dashBoardContent = <h4>TODO: DISPLAY PROFILE</h4>
            } else {
                dashBoardContent = (
                    <div>
                        <header id="header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-10 col-md-10">
                                        <h1>
                                            <i className="fas fa-cog"></i> Dashboard
                                            <small>- Manage Workflow</small>
                                        </h1>
                                    </div>
                                    <div className="col-xs-2 col-md-2">
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                Add New
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="add-project.html">New Project</a>
                                                <a className="dropdown-item" href="add-employee.html">New Employee</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <section id="breadcrumb">
                            <div class="container">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item active" aria-current="dashboard">Dashboard</li>
                                    </ol>
                                </nav>
                            </div>
                        </section>
                        <div className="container">
                            <p className="lead text-muted">Welcome { user.name }</p>
                            <p>You have not verified your profile. Please verify or create a new profile, if one has not already been created for you.</p>
                            <Link to='/create-profile' className="btn btn-dark">Verify or Create Profile</Link>
                        </div>
                    </div>
                )

            }
        }

        return (
            <div className="Dashboard">
                {dashBoardContent}
            </div>
        )
    }
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);