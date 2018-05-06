const validator = require('validator');
const isEmpty   = require('./is-empty');

module.exports = function validateProfileInput(data) {
    let errors = {};

    // Make sure that data.property is an empty STRING if one is not entered
    data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.skills = !isEmpty(data.skills) ? data.skills : '';


    // Validation scenarios to check against for the Profile
    if (!validator.isLength(data.handle, {min: 2, max: 40 })) {
        errors.handle = 'Handle needs to be between 2 and 40 characters';
    }

    if (validator.isEmpty(data.handle)) {
        errors.handle = 'Profile handle is required';
    }

    if (validator.isEmpty(data.status)) {
        errors.status = 'Status field is required';
    }

    if (validator.isEmpty(data.skills)) {
        errors.skills = 'Skills field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}