import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ projects, team, availability }) => (
    <div className="Sidebar col-4  d-none d-sm-none d-md-block">
        <div className="list-group mb-20">
            <a href="/dashboard" className="list-group-item list-group-item-action active main-color-bg">
                <i className="fas fa-cog"></i> Dashboard
            </a>
            <a href="/projects" className="list-group-item list-group-item-action">
                <i className="fas fa-tasks"></i> My Projects &nbsp;
                <span className="badge badge-secondary">4</span>
            </a>
            <a href="/employees" className="list-group-item list-group-item-action">
                <i className="fas fa-users"></i> Employees &nbsp;
                <span className="badge badge-secondary">4</span>
            </a>
            <a href="/availability" className="list-group-item list-group-item-action">
                <i className="fas fa-chart-pie"></i> Availability &nbsp;
                <span className="badge badge-secondary">29%</span>
            </a>
        </div>
        <div className="card mb-20">
            <div className="card-body">
                <h4>Daily Task Completed</h4>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '33%'}} aria-valuenow="33"
                        aria-valuemin="0" aria-valuemax="100">33%</div>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <h4>Weekly Project Completion %</h4>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '50%'}} aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">50%</div>
                </div>
            </div>
        </div>
    </div>
)

// Sidebar.propTypes = {
//     projects: PropTypes.object.isRequired,
//     team: PropTypes.object.isRequired,
//     availability: PropTypes.string.isRequired
// }

export default Sidebar;