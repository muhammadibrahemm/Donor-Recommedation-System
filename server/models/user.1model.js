const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      required: true,
      trim: true
    },
    email:{
      type: String,
      required: true,
      unique:true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      required: true,
    },
    city: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    available: {
      type: Boolean,
      default: true // true = ready to donate
    }
  },{
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema);

module.exports = User;
