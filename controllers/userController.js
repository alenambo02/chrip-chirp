const User = require('../models/User');

module.exports = {
    // gets all user
    getUsers(req, res){
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    //gets one user 
    getSingleUser(req, res){
        
    },

    //creates a new user
    createUser(req, res){

    },


};