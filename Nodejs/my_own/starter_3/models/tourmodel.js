const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true,
    unique: true,
  },
  rating: {
    type: 'number',
  },
  price: {
    type: 'number',
    required: true,
  },
});

const tour = new mongoose.model('tour', tourSchema);

module.exports = tour;
