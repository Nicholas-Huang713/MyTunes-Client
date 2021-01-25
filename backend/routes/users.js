const router = require('express').Router();
let User = require('../models/User');

router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const user = req.body;
    console.log(user);
    const newUser = new User({
        username: user.userName,
        firstname: user.firstName,
        lastname: user.lastName,
        email: user.email,
        password: user.password
    });

    newUser.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('Error ' + err))
})

module.exports = router;
