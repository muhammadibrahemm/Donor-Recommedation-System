const express = require("express");
const router = express.Router();
const emailCode = require("../controllers/verificationEmail.controller");

router
    .route('/verificationCode')
    .post(emailCode.verificationByEmail)

module.exports = router