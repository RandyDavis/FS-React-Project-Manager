import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderBackButton from '../common/HeaderBackButton';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { createProject } from '../../actions/projectActions';

class CreateProject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            team: [],
            title: '',
            number: '',
            status: '',
            from: '',
            to: '',
            description: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const projectData = {
            user: this.state.user,
            team: this.state.team,
            title: this.state.title,
            number: this.state.number,
            status: this.state.status,
            from: this.state.from,
            to: this.state.to,
            description: this.state.description,
        }

        this.props.createProject(projectData, this.props.history);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        const { errors } = this.state;

        // Select options for Status
        const statusOptions = [
            { label: 'Select Status', value: 0 },
            { label: 'Initial Planning', value: 'Initial Planning' },
            { label: 'Pre-Production', value: 'Pre-Production' },
            { label: 'Active Development', value: 'Active Development' },
            { label: 'QA Testing', value: 'QA Testing' },
            { label: 'Ready to Demo', value: 'Ready to Demo' },
            { label: 'Ready to Deploy', value: 'Ready to Deploy' },
            { label: 'Deployed', value: 'Deployed' },
            { label: 'Completed', value: 'Completed' }
        ];


        return (
            <div>
                <HeaderBackButton heading="Projects" subheading=" Create Project" />
                <section id="breadcrumb">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={"/dashboard"}>Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to={"/projects"}>Projects</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Create Project</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                <div className=" container">
                    <div className="card mb-20">
                        <div className="card-header main-color-bg">
                            <h2>Create New Project</h2>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="lead mtb-5">
                                        Let's add some information so others will know more about you.
                                    </p>
                                    <small className="mb-5">* = required fields</small>
                                    <form onSubmit={this.onSubmit}>
                                        <TextFieldGroup
                                            placeholder="* Project Title"
                                            name="title"
                                            value={this.state.title}
                                            onChange={this.onChange}
                                            error={errors.title}
                                            info="A title for the project."
                                        />
                                        <TextFieldGroup
                                            placeholder="* Project Number"
                                            name="number"
                                            value={this.state.number}
                                            onChange={this.onChange}
                                            error={errors.number}
                                            info="A unique number for the project."
                                        />
                                        <SelectListGroup
                                            placeholder="Status"
                                            name="status"
                                            value={this.state.status}
                                            onChange={this.onChange}
                                            options={statusOptions}
                                            error={errors.status}
                                            info="Status of the project"
                                        />
                                        <h6>* Project Start Date</h6>
                                        <TextFieldGroup
                                            name="from"
                                            type="date"
                                            value={this.state.from}
                                            onChange={this.onChange}
                                            error={errors.from}
                                        />
                                        <h6>* Project End Date</h6>
                                        <TextFieldGroup
                                            name="to"
                                            type="date"
                                            value={this.state.to}
                                            onChange={this.onChange}
                                            error={errors.to}
                                        />
                                        <TextAreaFieldGroup
                                            placeholder="Project Description"
                                            name="description"
                                            value={this.state.description}
                                            onChange={this.onChange}
                                            error={errors.description}
                                            info="Brief description about the project."
                                        />
                                        <input type="submit" className="btn btn-dark btn-block mb-20" value="Submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CreateProject.propTypes = {
    createProject: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    project: state.project,
    errors: state.errors
})

export default connect(mapStateToProps, { createProject })(withRouter(CreateProject));