const express       = require('express');
const router        = express.Router();
const mongoose      = require('mongoose');
const passport      = require('passport');

// Load Validation
const validateProfileInput = require('../../validation/profile');
const validateProjectInput = require('../../validation/project');

// Load Profile Model
const Profile = require('../../models/Profile');
// Load User Profile
const User = require('../../models/User');

// @route   GET api/profile/test
// @desc    Initial test GET route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Profile Works '}));

// @route   GET api/profile
// @desc    GET current user's profile
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
        .populate('user', ['name', 'avatar'])
        // .populate('projects', ['name']) //Placeholder for Projects from the projects model
        .then(profile => {
            if (!profile) {
                errors.noProfile = 'There is no profile for this user';
                return res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

// @route   GET api/profile/all
// @desc    GET all profiles
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    Profile.find()
    .populate('user', ['name', 'avatar'])
    // .populate('projects', ['name']) //Placeholder for Projects from the projects model
    .then(profiles => {
        if (!profiles) {
            errors.noProfiles = 'No profiles were found';
            res.status(404).json(errors);
        }
        res.json(profiles);
    })
    .catch(err => res.status(404).json({ profiles: 'There are no profiles' }));
});

// @route   GET api/profile/handle/:handle
// @desc    GET profile by handle
// @access  Public
router.get('/handle/:handle', (req, res) => {
    const errors = {};

    Profile.findOne({ handle: req.params.handle })
    .populate('user', ['name', 'avatar'])
    // .populate('projects', ['name']) //Placeholder for Projects from the projects model
    .then(profile => {
        if (!profile) {
            errors.noProfile = 'There is no profile for this user';
            res.status(404).json(errors);
        }
        res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET api/profile/user/:user_id
// @desc    GET profile by user ID
// @access  Public
router.get('/user/:user_id', (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.params.user_id })
    .populate('user', ['name', 'avatar'])
    // .populate('projects', ['name']) //Placeholder for Projects from the projects model
    .then(profile => {
        if (!profile) {
            errors.noProfile = 'There is no profile for this user';
            res.status(404).json(errors);
        }
        res.json(profile);
    })
    .catch(err => res.status(404).json({ profile: 'There is no profile for this user' }));
});

// @route   POST api/profile
// @desc    Create and Update user profile
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.title) profileFields.title = req.body.title;
    if (req.body.projects) profileFields.projects = req.body.projects;
    if (req.body.team) profileFields.team = req.body.team;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.from) profileFields.from = req.body.from;
    if (req.body.description) profileFields.description = req.body.description;
    if (req.body.currentAvailability) profileFields.currentAvailability = req.body.currentAvailability;
    // Skills - split into an array
    if (typeof req.body.skills !== 'undefined') {
        profileFields.skills = req.body.skills.split(',');
    }

    Profile.findOne({ user: req.user.id })
        .then(profile => {
            if (profile) {
                // Update
                Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFields },
                    { new: true }
                )
                .then(profile => res.json(profile));
            } else {
                // Check if handle exists
                Profile.findOne({ handle: profileFields.handle }).then(profile => {
                    if (profile) {
                        errors.handle = 'That handle already exists';
                        res.status(400).json(errors)
                    }

                    // Save Profile
                    new Profile(profileFields).save()
                        .then(profile => res.json(profile));
                });
            }
        })
        .catch(err => res.status(404).json(err));
});

// @route   DELETE api/profile/:_id
// @desc    Delete user and profile
// @access  Private
router.delete('/:_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const query = { user: req.user.id };
    Profile.findOneAndRemove(query)
        .then(() => {
            User.findOneAndRemove({ _id: req.user.id })
                .then(() => res.json({ success: true }))
        });
});

module.exports = router;