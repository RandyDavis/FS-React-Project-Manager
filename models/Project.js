const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProjectSchema = new Schema({
    team: [
        {
            profile: {
                type: Schema.Types.ObjectId,
                ref: 'profile'
            }
        }
    ],
    title: {
        type: String,
        required: true
    },
    number: {
        type: Number,
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
        type: string
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Project = mongoose.model('project', ProjectSchema);