const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const songSchema = new Schema({
    songId: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true,
    },
    coverSml: {
        type: String,
        required: true
    },
    coverLg: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const Song = mongoose.model('Song', songSchema);

module.exports = Song;