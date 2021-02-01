const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });

const {userController} = require('../controllers')

router
    .post('/user/new', userController.processSignup)
    .post('/user/login', userController.processLogin)
    .get('/login-status', userController.loginStatus)
    .get('/test', userController.testData)
    .put('/user/profile-picture', upload.single('content'), userController.photoUpload)
    .get('/user/profile-picture', userController.image)

module.exports = router