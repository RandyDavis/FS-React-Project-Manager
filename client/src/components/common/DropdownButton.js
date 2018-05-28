import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DropdownButton = (props) => (
    <div className="Dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            {props.buttonText}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to="/projects/create-project">{props.link1Text}</Link>
            <Link className="dropdown-item" to="/employees/create-new">{props.link2Text}</Link>
        </div>
    </div>
)

DropdownButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    link1Text: PropTypes.string.isRequired,
    link2Text: PropTypes.string.isRequired,
}

export default DropdownButton;