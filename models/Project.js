const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProjectSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    team: [
        {
            profile: {
                type: Schema.Types.ObjectId,
                ref: 'profiles'
            }
        }
    ],
    title: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    from: {
        type: Date
    },
    to: {
        type: Date
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Project = mongoose.model('project', ProjectSchema);