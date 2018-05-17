const validator = require('validator');
const isEmpty   = require('./is-empty');

module.exports = function validateProfileInput(data) {
    let errors = {};

    // Make sure that data.property is an empty STRING if one is not entered
    data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.title = !isEmpty(data.title) ? data.title : '';
    data.skills = !isEmpty(data.skills) ? data.skills : '';
    data.from = !isEmpty(data.from) ? data.from : '';


    // Validation scenarios to check against for the Profile
    if (!validator.isLength(data.handle, {min: 2, max: 40 })) {
        errors.handle = 'Handle needs to be between 2 and 40 characters';
    }

    if (validator.isEmpty(data.handle)) {
        errors.handle = 'Profile handle is required';
    }

    if (validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if (validator.isEmpty(data.skills)) {
        errors.skills = 'Skills field is required';
    }

    if (validator.isEmpty(data.from)) {
        errors.from = 'Start date field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}