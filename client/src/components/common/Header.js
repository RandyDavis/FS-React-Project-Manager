import React from 'react';
import PropTypes from 'prop-types';

const Header = ( props ) => (
    <header className="Header">
        <div className="container">
            <div className="row">
                <div className="col-xs-10 col-md-10">
                    <h1>
                        <i className="fas fa-cog"></i> {props.heading}
                        <small> - {props.subheading}</small>
                    </h1>
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired
}

export default Header;