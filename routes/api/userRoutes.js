const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
} = require('../../controllers/userController');

//this is combining the get and post route for user
//  /api/users
router.route('/').get(getUsers).post(createUser);


router.route('/:userId').get(getSingleUser);


module.exports = router;