const router = require('express').Router();

const {
  getThoughts,
  getOneThought,
  createThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

router
  .route('/')
  .get(getThoughts)
  .post(createThought);

router
  .route('/:id')
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

router
  .route('/:thoughtId/reactions')
  .post(createReaction);

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

  
module.exports = router;