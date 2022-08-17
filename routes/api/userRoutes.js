const router = require('express').Router();

// GET all users
// GET a single user by its _id and populated thought and friend data
// POST a new user:
// PUT to update a user by its _id
// DELETE to remove user by its _id

//  /api/users
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser, 
} = require('../../controllers/userController');

//this is combining the get and post route for user
router.route('/').get(getUsers).post(createUser);


router
.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);


module.exports = router;