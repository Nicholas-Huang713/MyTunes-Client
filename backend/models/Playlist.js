const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    likes: {
        type: Array,
        required: false
    },
    list: {
        type: Array,
        required: false,
    },
    
}, {
    timestamps: true
})

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;