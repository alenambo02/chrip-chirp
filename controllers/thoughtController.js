const User = require('../models/Thought');
const { post } = require('../routes/api/thoughtRoutes');

module.exports = {
    // gets all thoughts
    getThoughts(req, res){
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    //gets single thought
    getSingleThought(req, res){
        User.findOne({ _id: req.params.thoughtId })
        .then((thought) =>
        !thought
            ? res.status(404).json({ message: 'Could not find thought with this ID!' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    // creates a new thought
    



};