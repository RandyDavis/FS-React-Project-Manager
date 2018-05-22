import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import HeaderDropdown from '../common/HeaderDropdown';
import { getProfiles } from '../../actions/profileActions';
import ProfileItem from './ProfileItem';
import Sidebar from '../common/Sidebar';

class Profiles extends Component {
    componentDidMount() {
        this.props.getProfiles();
    }

    render() {
        const { profiles, loading } = this.props.profile;
        let profileItems;

        if (profiles === null || loading) {
            profileItems = (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Spinner />
                        </div>
                    </div>
                </div>
            )
        } else {
            if (profiles.length > 0) {
                profileItems = profiles.map(profile => (
                    <ProfileItem key={profile._id} profile={profile} />
                ))
            } else {
                profileItems = <h4>No profiles found</h4>;
            }
        }

        return (
            <div className="Profiles-Private">
                <HeaderDropdown heading="Employees" subheading="Current" />
                <section id="breadcrumb">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Employees</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                <section className="main">
                    <div className="container">
                        <div className="row">
                            <Sidebar />
                            <div className="col">
                                <div className="card mb-20">
                                    <div className="card-header main-color-bg">
                                        <h2>Employee Roster</h2>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col mt-20 ">
                                                <input className="form-control form-control-sm" type="text" placeholder="Filter Employees..." />
                                            </div>
                                        </div>
                                        <div className="row">
                                            {profileItems}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfiles })(Profiles);