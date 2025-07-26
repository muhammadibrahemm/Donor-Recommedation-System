const express = require('express');
const router = express.Router();
const nearestDonorByZipcode = require("../controllers/nearest.donor.controller")
const allDonors = require("../controllers/totalDonors.controller")

router.route('/nearest/byzipcode').post(nearestDonorByZipcode);

router.route('/all').get(allDonors);

module.exports = router;

