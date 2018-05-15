import React from "react";

const Spinner = () => {
	return (
        <div className="row mtb-50">
            <div className="col"></div>
            <div className="col text-center">
                <i className="fas fa-sync fa-spin fa-6x" />
            </div>
            <div className="col"></div>
		</div>
	);
};

export default Spinner;