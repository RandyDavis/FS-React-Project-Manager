import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';


class ProfileItem extends Component {
    render() {
        const { profile } = this.props;
        const { isAuthenticated } = this.props;

        return (
            <div className="ProfileItem col-sm-6 col-md-6 col-lg-4">
                <div className="card overview-card">
                    { isAuthenticated
                      ?
                      <Link to={`/employees/profile/${profile.handle}`}>
                          <img src={profile.user.avatar} className="d-none d-sm-block" alt="" />
                      </Link>
                      :
                      <Link to={`/employees-public/profile/${profile.handle}`}>
                          <img src={profile.user.avatar} className="d-none d-sm-block" alt="" />
                      </Link>
                    }
                    <div className="card-body">
                        { isAuthenticated
                          ?
                          <h3 className="employee-name text-center"><Link to={`/employees/profile/${profile.handle}`}>{profile.user.name}</Link></h3>
                          :
                          <h3 className="employee-name text-center"><Link to={`/employees-public/profile/${profile.handle}`}>{profile.user.name}</Link></h3>
                        }
                        <p className="card-title employee-title">
                            Title: {profile.title}
                        </p>
                        <p className="card-text">
                            <i className="fas fa-users"></i> Team: {isEmpty(profile.team) ? "Not Assigned" : profile.team}
                        </p>
                        <p className="card-text">
                            <i className="fas fa-map-marker"></i> Location: {isEmpty(profile.location) ? "Not Specified" : profile.location}
                        </p>
                        <p className="card-text">
                            <i className="fas fa-tasks"></i> Skills: {profile.skills.slice(0, 4).join(', ')}
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><a href={`mailto:${profile.handle}@company.com`}>{profile.handle}@company.com</a></small>
                    </div>
                </div>
            </div>
        )
    }
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileItem;