const mongoose = require('mongoose');

// 1. Define Schema and Model
const locationSchema = new mongoose.Schema({
  city: String,
  zip: String,
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;