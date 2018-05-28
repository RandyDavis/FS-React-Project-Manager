import React from 'react';

const SuccessAlert = () => (
    <div className="container">
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            Success! New employee has been created. Use login credentials to create the new employee profile in order to see them on the employee roster.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
)

export default SuccessAlert;