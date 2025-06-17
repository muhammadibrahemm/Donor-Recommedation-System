const express = require('express');
const router = express.Router();

const userAuthController = require("../controllers/user.auth.controller")

router.route("/register").post(userAuthController.userRegistration);

module.exports = router;
