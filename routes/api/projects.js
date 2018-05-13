const express       = require('express');
const router        = express.Router();
const mongoose      = require('mongoose');
const passport      = require('passport');
// const uuid          = require('uuid');

// Load Models
const Project = require('../../models/Project');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// Validation
const validateProjectInput = require('../../validation/project');

// @route   GET api/projects/test
// @desc    Initial test GET route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Projects Works '}));

// @route   POST api/projects/new
// @desc    Create new project
// @access  Private
router.post('/new', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateProjectInput(req.body);

    // Check Validation
    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    }

    // Get fields
    const projectFields = {};
    projectFields.id = req.body._id;
    if (req.body.team) projectFields.team = req.body.team;
    if (req.body.title) projectFields.title = req.body.title;
    if (req.body.number) projectFields.number = req.body.number;
    if (req.body.status) projectFields.status = req.body.status;
    if (req.body.from) projectFields.from = req.body.from;
    if (req.body.to) projectFields.to = req.body.to;
    if (req.body.description) projectFields.description = req.body.description;

    // Check if project exists
    Project.findOne({ number: projectFields.number }).then(project => {
        if (project) {
            errors.number = 'Project number already exists';
            res.status(400).json(errors);
        } else {

            // Save Project
            new Project(projectFields)
                .save()
                .then(project => res.json(project));
        }
    })

})

// @route   PUT api/projects/:_id
// @desc    Edit or Update a project
// @access  Private
router.put('/:_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    // Get fields
    const project = req.body;
    const query = { _id: req.params._id };
    const projectFields = {};
    // // projectFields.id = req.body._id;
    if (req.body.team) projectFields.team = req.body.team;
    if (req.body.title) projectFields.title = req.body.title;
    if (req.body.number) projectFields.number = req.body.number;
    if (req.body.status) projectFields.status = req.body.status;
    if (req.body.from) projectFields.from = req.body.from;
    if (req.body.to) projectFields.to = req.body.to;
    if (req.body.description) projectFields.description = req.body.description;

    const update = {
        $set: projectFields
    }

    const options = { new: true }

    Project.findOneAndUpdate(query, update, options, (err, projects) => {
        if (err) {
            throw err;
        }
        res.json(projects)
    });
});

// @route   GET api/projects/all
// @desc    GET projects
// @access  Private
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};

    Project.find()
        .then(projects => {
            if (!projects) {
                errors.noProjects = 'There are no projects to list at this time.';
                return res.status(404).json(errors);
            }
            res.json(projects)
        })
        .catch(err => res.status(404).json({ noProjectsFound: 'No Projects Found' }));
});

// @route   DELETE api/projects/:_id
// @desc    Delete a project
// @access  Private
router.delete('/:_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const query = { _id: req.params._id };

    Project.findOneAndRemove(query)
        .then(() => res.json({ success: true }));

    // Alternative way to delete from the db
    // Project.remove(query, (err, projects) => {
    //     if (err) {
    //         throw err;
    //     }
    //     res.json(projects);
    // })
});

module.exports = router;