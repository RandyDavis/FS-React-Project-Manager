const express       = require('express');
const router        = express.Router();
const mongoose      = require('mongoose');
const passport      = require('passport');

// @route   GET api/users/test
// @desc    Initial test GET route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works '}));

module.exports = router;