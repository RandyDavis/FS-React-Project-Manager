const express       = require('express');
const router        = express.Router();
const mongoose      = require('mongoose');
const passport      = require('passport');

// @route   GET api/projects/test
// @desc    Initial test GET route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Projects Works '}));

module.exports = router;