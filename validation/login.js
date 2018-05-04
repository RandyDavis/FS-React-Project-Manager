const validator = require('validator');
const isEmpty   = require('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    // Make sure that data.property is an empty STRING if one is not entered
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';


    // Validation scenarios to check against for registration

    if (!validator.isEmail(data.email)) {
        errors.email = 'Incorrect email/password combination';
    }

    if (validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }


    if (!validator.isLength(data.password, {min: 6, max: 30 })) {
        errors.password = 'Incorrect email/password combination';
    }

    if (validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}