const mongoose = require('mongoose');

const donorInfoSchema = new mongoose.Schema(
  {
    lastDonationDate: {
      type: Date,
      required: false, // Not required if no donation yet
      default: null
    },
    available: {
      type: Boolean,
      default: true
    },
    donationCount: [
      {
        date: {
          type: Date,
          required: true
        },
        location: {
          type: String,
          required: false
        }
      }
    ],
    donorRefID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  }
);

const DonorInfo = mongoose.model('DonorInfo', donorInfoSchema);
module.exports = DonorInfo;
