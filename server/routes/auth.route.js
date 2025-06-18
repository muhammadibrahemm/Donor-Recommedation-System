const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.auth.controller');
// http:localhost:5000/api/user/auth/register
// http:localhost:5000/api/user/auth/login
// http:localhost:5000/api/user/auth/logout

// 1) route for user registration
router.route('/auth/register').post(userController.userRegister);

// 2) route for user login
router.route('/auth/login').post(userController.userLogin);


module.exports = router;