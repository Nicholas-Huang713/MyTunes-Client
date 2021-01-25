const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userDataSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    favorites: {
        type: Array,
        required: false,
    },
    playlists: {
        type: Array,
        required: false,
    }
}, {
    timestamps: true
})

const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;