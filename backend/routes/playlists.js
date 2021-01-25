const router = require('express').Router();
let Playlist = require('../models/Playlist');

router.route('/').get((req,res) => {
    Playlist.find()
        .then(playlists => res.json(playlists))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const playlist = req.body.playlist;
    const newPlaylist = new Playlist({playlist});

    newPlaylist.save()
        .then(() => res.json('Playlist created'))
        .catch(err => res.status(400).json('Error ' + err))
})

module.exports = router;
