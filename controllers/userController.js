const User = require('../models/User');
const Thought = require('../models/Thought');


module.exports = {
    // gets all user
    getUsers(req, res){
        User.find()
            .then((users) => res.json(users))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            });
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
        console.log('i am here')
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });
    },

    //updates a user 
    updateUser(req, res){
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) => 
        !user
            ? res.status(404).json({ message: 'No user found with this ID' })
            : res.json(user)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    //deletes a user and its thoughts 
    deleteUser(req, res){
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) => 
        !user
          ? res.status(404).json({ message: 'Sorry no user with that ID was found' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
        )
        .then(() => res.json({ message: 'User and its associated thoughts have been deleted!' }))
        .catch((err) => res.status(500).json(err));
    },





// bouns friend route
    async addFriendToUser(req, res) {

        try {
            const user = User.findOne({ _id: req.param.userId })
            const userFriends = [
                ...user.friends,
                req.param.friendId
            ]
            //overriding the fields 
            user.friends = userFriends
            const updatedUser = await user.save();
            res.json(updatedUser)
        } catch (err) {
            res.status(500).json(err);
        }
    },

};