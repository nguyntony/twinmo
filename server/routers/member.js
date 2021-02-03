const express = require("express")
const router = express.Router()

const {requireLogin} = require('../auth.js')
const {memberController} = require('../controllers')

router
    .get("*", requireLogin)
    .get('/get-users', memberController.findUsers)
    .post('/friend/add', memberController.addFriend)

module.exports = router