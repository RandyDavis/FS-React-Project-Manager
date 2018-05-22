import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeaderDropdown = ( props ) => (
    <header className="Header">
        <div className="container">
            <div className="row">
                <div className="col-xs-10 col-md-10">
                    <h1>
                        <i className="fas fa-cog"></i> {props.heading}
                        <small> - {props.subheading}</small>
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
)

HeaderDropdown.propTypes = {
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired
}

export default HeaderDropdown;