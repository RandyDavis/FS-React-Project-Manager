import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../../components/common/Spinner';
import Sidebar from '../common/Sidebar';
import CreateProject from '../create-project/CreateProject';

class Dashboard extends Component {
    componentDidMount() {
        this.props.getCurrentProfile();
    }

    onDeleteClick(e) {
        this.props.deleteAccount();
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
                dashBoardContent = (
                    <div>
                        <header id="header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-10 col-md-10">
                                        <h1>
                                            <i className="fas fa-cog"></i> Dashboard
                                            <small> - Manage Workflow</small>
                                        </h1>
                                    </div>
                                    <div className="col-xs-2 col-md-2">
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                Create New
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <Link className="dropdown-item" to="/projects/create-project">New Project</Link>
                                                <Link className="dropdown-item" to="/create-employee">New Employee</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
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
                        <section id="main">
                            <div className="container">
                                <div className="row">
                                    <Sidebar />
                                    <div className="col">
                                        <div className="card mb-20">
                                            <div className="card-header main-color-bg">
                                                <h2>Daily Work Overview</h2>
                                            </div>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="card overview-card">
                                                            <div className="card-body text-center">
                                                                <span className="card-text">
                                                                    <i className="fas fa-tasks"></i> 3</span>
                                                                <br />
                                                                <span className="card-title">Active Projects</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card overview-card">
                                                            <div className="card-body text-center">
                                                                <span className="card-text">
                                                                    <i className="fas fa-chart-pie"></i> 29%</span>
                                                                <br />
                                                                <span className="card-title">Availability</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header main-color-bg">
                                                <h2>Active Projects</h2>
                                            </div>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="table-responsive">
                                                        <table className="table table-striped table-hover table-sm">
                                                            <thead className="thead-dark">
                                                                <tr>
                                                                    <th scope="col">Name</th>
                                                                    <th scope="col">Project #</th>
                                                                    <th scope="col">Status</th>
                                                                    <th scope="col">Daily Planned HRs</th>
                                                                    <th scope="col">Due By Date</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Shield Campaign</td>
                                                                    <td>PF-374-021</td>
                                                                    <td>CURRENT</td>
                                                                    <td className="text-center">3</td>
                                                                    <td>05-11-2018</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Employee Management Tool</td>
                                                                    <td>PF-384-158</td>
                                                                    <td>COMPLETED</td>
                                                                    <td className="text-center">0</td>
                                                                    <td>05-17-2018</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Developer Access UI Overhaul</td>
                                                                    <td>PF-385-199</td>
                                                                    <td>CURRENT</td>
                                                                    <td className="text-center">2</td>
                                                                    <td>05-31-2018</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Leadership Summit Planning</td>
                                                                    <td>PF-385-239</td>
                                                                    <td>CURRENT</td>
                                                                    <td className="text-center">0</td>
                                                                    <td>05-31-2018</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-20">
                                            <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">Delete My Account</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )
            } else {
                dashBoardContent = (
                    <div>
                        <header className="Header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-10 col-md-10">
                                        <h1>
                                            <i className="fas fa-cog"></i> Dashboard
                                            <small> - Manage Workflow</small>
                                        </h1>
                                    </div>
                                    <div className="col-xs-2 col-md-2">
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                                Create New
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <Link className="dropdown-item" to="/create-project">New Project</Link>
                                                <Link className="dropdown-item" to="/create-employee">New Employee</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <section id="breadcrumb">
                            <div className="container">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                                    </ol>
                                </nav>
                            </div>
                        </section>
                        <div className="container">
                            <p className="lead text-muted">Welcome { user.name }</p>
                            <p>You have not verified your profile. Please verify or create a new profile, if one has not already been created for you.</p>
                            <Link to='/create-profile' className="btn btn-dark">Verify or Create Profile</Link>
                            &nbsp;&nbsp;
                            <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">Delete My Account</button>
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
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);