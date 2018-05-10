const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    projects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'projects'
        }
    ],
    title: {
        type: String,
        required: true
    },
    team: {
        type: String
    },
    location: {
        type: String
    },
    skills: {
        type: [String],
        required: true
    },
    from: {
        type: Date,
        required: true
    },
    description: {
        type: String
    },
    currentAvailability: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);