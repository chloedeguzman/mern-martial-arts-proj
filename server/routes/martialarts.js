const express = require('express');
const router = express.Router();

// Martial arts model
const MartialArt = require('../models/MartialArt');

// @route GET api/martialarts
// @desc Get all types of martial martialArts
// @acces Public
router.get('/', (req, res) => {
  MartialArt.find()
    .then(martialArts => res.json(martialArts))
});

// @route POST api/martialarts
// @desc Create a martial art
// @access Public
router.post('/', (req, res) => {
  const newMartialArt = new MartialArt({
    name: req.body.name
  });

  newMartialArt.save().then(martialArt => res.json(martialArt));
});

// @route DELETE api/martialarts/:id
// @desc Delete a martial art
// @access Public
router.delete('/:id', (req, res) => {
  MartialArt.findById(req.params.id)
  .then(martialArt => martialArt.remove().then(() => res.json({success: true})))
  .catch(err => res.status(404).json({success: false}))
});


module.exports = router;
