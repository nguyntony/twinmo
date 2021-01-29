const express = require('express');
const router = express.Router();

const {userController} = require('../controllers')

router
    .post('/user/new', userController.processSignup)
    .post('/user/login', userController.processLogin)
    .get('/login-status', userController.loginStatus)
    .get('/test', userController.testData)

module.exports = router