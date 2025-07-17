const express = require('express');
const router = express.Router();
const locationController = require("../controllers/zipcodes.controller");

router.route('/zipcodes').get(locationController);

module.exports = router