const validator = require('validator');
const isEmpty   = require('./is-empty');

module.exports = function validateProjectInput(data) {
    let errors = {};

    // Make sure that data.property is an empty STRING if one is not entered
    data.title = !isEmpty(data.title) ? data.title : '';
    data.number = !isEmpty(data.number) ? data.number : '';
    data.status = !isEmpty(data.status) ? data.status : '';


    // Validation scenarios to check against for the Profile
    if (validator.isEmpty(data.title)) {
        errors.title = 'Project title is required';
    }

    if (validator.isEmpty(data.status)) {
        errors.status = 'Status field is required';
    }

    if (validator.isEmpty(data.number)) {
        errors.number = 'Project number field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}