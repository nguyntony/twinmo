const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });

const {userController} = require('../controllers')

router
    .post('/user/new', userController.processSignup)
    .post('/user/login', userController.processLogin)
    .get('/login-status', userController.loginStatus)
    .put('/user/profile-picture', upload.single('file'), userController.photoUpload)
    .get('/user/profile-pic', userController.photo)
    .post('/user/email-check', userController.uniqueEmailCheck)
    .post('/user/username-check', userController.uniqueUsernameCheck)
    .get('/user/logout', userController.logout)

module.exports = router