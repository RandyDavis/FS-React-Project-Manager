import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjects } from '../../actions/projectActions';
import { getCurrentProfile } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';

class Projects extends Component {
    componentDidMount() {
        this.props.getCurrentProfile();
        this.props.getProjects();
    }

    render() {
        const { user } = this.props.auth;
        const { profile, loading } = this.props.profile;
        const { projects, projectsLoading } = this.props.projects;
        let projectsContent;

        if(projects === null || projectsLoading) {
            projectsContent = <Spinner />
        } else {
            // Check if projects list contain any data
            if (Object.keys(projects).length > 0) {
                projectsContent = (
                    <div>
                        TODO: LIST PROJECTS IN TABLE
                    </div>
                )
            } else {
                projectsContent = (
                    <div>
                        TODO: DISPLAY NO PROJECTS MESSAGE
                    </div>
                )
            }
        }

        return (
            <div>
                <Header heading="Projects" subheading=" Manage Project" />
                <p className="container lead text-muted">
                    Welcome <Link to={`/profile/${profile.handle}`}>{ profile.user.name }!</Link>
                </p>
                <section id="breadcrumb">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                            </ol>
                        </nav>
                    </div>
                </section>
            </div>

        )
    }
}

Projects.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    // projects: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth,
    projects: state.projects
})


export default connect(mapStateToProps, { getCurrentProfile, getProjects })(Projects);