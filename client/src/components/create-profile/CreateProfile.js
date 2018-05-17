import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';

class CreateProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            handle: '',
            projects: [],
            title: '',
            team: '',
            location: '',
            skills: '',
            from: '',
            bio: '',
            currentAvailability: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('submitted');
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        const { errors } = this.state;

        // Select options for Title
        const titleOptions = [
            { label: '* Select Title', value: 0 },
            { label: 'Account Manager', value: 'Account Manager' },
            { label: 'Project Manager', value: 'Project Manager' },
            { label: 'Team Manager', value: 'Team Manager' },
            { label: 'Backend Developer', value: 'Backend Developer' },
            { label: 'Front End Developer', value: 'Front End Developer' },
            { label: 'Software Engineer', value: 'Software Engineer' },
            { label: 'Deployment/Build Engineer', value: 'Deployment/Build Engineer' },
            { label: 'UX Developer', value: 'UX Developer' },
            { label: 'Content Strategist', value: 'Content Strategist' },
            { label: 'Art/Graphic Designer', value: 'Art/Graphic Designer' },
            { label: 'Quality Assurance Engineer', value: 'Quality Assurance Engineer' },
        ];

        // Select options for Team
        const teamOptions = [
            { label: 'Select Team', value: 0 },
            { label: 'Management', value: 'Management' },
            { label: 'Back End Development', value: 'Back End Development' },
            { label: 'Front End Development', value: 'Front End Development' },
            { label: 'Art/Graphic Design', value: 'Art/Graphic Design' },
            { label: 'Quality Assurance', value: 'Quality Assurance' },
            { label: 'DevOps', value: 'DevOps' },
            { label: 'UX/Content Strategy', value: 'UX/Content Strategy' }
        ];


        return (
            <div>
                <header id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-10 col-md-10">
                                <h1>
                                    <i className="fas fa-cog"></i> Employees
                                    <small> - Manage Profile</small>
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
                <section id="breadcrumb">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Profile</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                <div className=" container">
                    <div className="card mb-20">
                        <div className="card-header main-color-bg">
                            <h2>Create Your Profile</h2>
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
                                            placeholder="* Profile Handle"
                                            name="handle"
                                            value={this.state.handle}
                                            onChange={this.onChange}
                                            error={errors.handle}
                                            info="A unique handle for your profile URL."
                                        />
                                        <SelectListGroup
                                            placeholder="Title"
                                            name="title"
                                            value={this.state.title}
                                            onChange={this.onChange}
                                            options={titleOptions}
                                            error={errors.title}
                                            info="Title identifying your position within the company."
                                        />
                                        <SelectListGroup
                                            placeholder="Team"
                                            name="team"
                                            value={this.state.team}
                                            onChange={this.onChange}
                                            options={teamOptions}
                                            error={errors.team}
                                            info="Team assigned to within the company."
                                        />
                                        <h6>* Employment Start Date</h6>
                                        <TextFieldGroup
                                            name="from"
                                            type="date"
                                            value={this.state.from}
                                            onChange={this.onChange}
                                            error={errors.from}
                                        />
                                        <TextFieldGroup
                                            placeholder="* List Employee skillset"
                                            name="skills"
                                            value={this.state.skills}
                                            onChange={this.onChange}
                                            error={errors.skills}
                                            info="Please use comma separated values (eg. HTML, CSS, JavaScript...)"
                                        />
                                        <TextFieldGroup
                                            placeholder="Location - City, State"
                                            name="handle"
                                            value={this.state.handle}
                                            onChange={this.onChange}
                                            error={errors.handle}
                                            info="Provide city and state of working location"
                                        />
                                        <TextAreaFieldGroup
                                            placeholder="Short Bio"
                                            name="bio"
                                            value={this.state.bio}
                                            onChange={this.onChange}
                                            error={errors.bio}
                                            info="Tell us a little about yourself"
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

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
})

export default connect(mapStateToProps, {})(CreateProfile);