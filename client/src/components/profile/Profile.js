import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Spinner from '../common/Spinner';
import HeaderDropdown from '../common/HeaderDropdown';
import Sidebar from '../common/Sidebar';
import { getProfileByHandle } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';

class Profile extends Component {
    componentDidMount() {
        if (this.props.match.params.handle) {
            this.props.getProfileByHandle(this.props.match.params.handle);
        }
    }

    render() {
        const { profile, loading } = this.props.profile;
        let profileContent;

        if (profile === null || loading) {
            profileContent = (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Spinner />
                        </div>
                    </div>
                </div>
            )
        } else {
            // Get first name
            const firstName = profile.user.name.trim().split(' ')[0];

            profileContent = (
                <div className="col">
                    <div className="card mb-20">
                        <div className="card-header main-color-bg">
                            <h2>{firstName}'s Profile</h2>
                        </div>
                        <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-12">
                                <div className="Profile card overview-card">
                                    <img src={profile.user.avatar} alt="" />
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-12">
                                <div className="Profile card overview-card">
                                    <div className="card-body">
                                        <h3 className="employee-name text-center">{profile.user.name}</h3>
                                        <p className="card-title employee-title">
                                            <strong>Title:</strong> {profile.title}
                                        </p>
                                        <p className="card-title">
                                            <i className="fas fa-envelope"></i> <strong>Email:</strong> <a href={`mailto:${profile.handle}@company.com`}>{profile.handle}@company.com</a>
                                        </p>
                                        <p className="card-text">
                                            <i className="fas fa-users"></i> <strong>Team:</strong> {isEmpty(profile.team) ? "Not Assigned" : profile.team}
                                        </p>
                                        <p className="card-text">
                                            <i className="fas fa-map-marker"></i> <strong>Location:</strong> {isEmpty(profile.location) ? "Not Specified" : profile.location}
                                        </p>
                                        <p className="card-text">
                                            <i className="fas fa-tasks"></i> <strong>Skills:</strong> {profile.skills.slice(0, 4).join(', ')}
                                        </p>
                                        <p>
                                            <i className="fas fa-chart-pie"></i> <strong>Active Projects:</strong> {profile.projects.length < 1 ? 0 : profile.projects.length}
                                        </p>
                                        <p>
                                            <strong>Employed Since:</strong> { ' ' }
                                            <Moment format="MMM DD, YYYY">{profile.from}</Moment>
                                        </p>
                                        <p className="mb-0">
                                            <strong>Bio:</strong> {isEmpty(profile.bio) ? 'Bio Not Available' : profile.bio }
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-6">
                                                <Link className="btn btn-secondary btn-block" id="editProfileButton" to="/editProfile">
                                                    Edit Profile
                                                </Link>
                                            </div>
                                            <div className="col-6">
                                                <button className="btn btn-danger btn-block" type="button" id="deleteProfileButton" href="#">
                                                    Delete Profile
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <HeaderDropdown heading="Employees" subheading=" Profile" />
                <section id="breadcrumb">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to="/employees">Employees</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Employee Profile</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                <section className="main">
                    <div className="container">
                        <div className="row">
                            <Sidebar />
                            {profileContent}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

Profile.propTypes = {
    profile: PropTypes.object.isRequired,
    getProfileByHandle: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfileByHandle })(Profile);