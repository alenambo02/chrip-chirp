const router = require('express').Router();

// GET to get all thoughts
// GET to get a single thought by its _id
// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
// PUT to update a thought by its _id
// DELETE to remove a thought by its _id

//  /api/thoughts
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought, 
} = require('../../controllers/thoughtController');

//gets thoughts and posts thoughts
router.route('/').get(getThoughts).post(createThought);

router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughtId/reactions')



module.exports = router;