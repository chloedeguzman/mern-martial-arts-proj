const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MartialArtSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = MartialArt = mongoose.model('martialArt', MartialArtSchema);
