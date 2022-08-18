const User = require('../models/User');

module.exports = {
    // gets all user
    getUsers(req, res){
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    // .select('-__v')  <---- this just selects everything, its like a * in mysql
    //gets one user 
    getSingleUser(req, res){
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) =>
        !user   
            ? res.status(404).json({ message: 'No user was found with that ID!'})
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    //creates a new user
    createUser(req, res){
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
    },

    //updates a user 
    updateUser(req, res){

    },

    //deletes a user
    deleteUser(req, res){

    },


};