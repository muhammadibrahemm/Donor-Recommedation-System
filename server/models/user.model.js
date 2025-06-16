const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // no duplicate users
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: true
  },
  city: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{11}$/ // Pakistani 11-digit phone number (e.g. 03001234567)
  },
  available: {
    type: Boolean,
    default: true // true = ready to donate
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add compound index for fast donor filtering
userSchema.index({ bloodGroup: 1, city: 1 });

module.exports = mongoose.model('User', userSchema);
