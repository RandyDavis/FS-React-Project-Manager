import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import Header from '../common/Header';
import '../../actions/authActions';
import { getProfiles } from '../../actions/profileActions';
import PublicProfileItem from './PublicProfileItem';

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
                profileItems = profiles.map((profile, auth) => (
                    <PublicProfileItem key={profile._id} profile={profile} />
                ))
            } else {
                profileItems = <h4>No profiles found</h4>;
            }
        }

        return (
            <div className="Profiles-Public">
                <Header heading="Employees" subheading="Current" />
                <section id="breadcrumb">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">Employees</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                <div className=" container">
                    <div className="card mb-20">
                        <div className="card-header main-color-bg">
                            <h2>Employee Roster</h2>
                        </div>
                        <div className="container">
                            <div className="row">
                                {profileItems}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getProfiles })(Profiles);