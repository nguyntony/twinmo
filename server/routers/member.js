const express = require("express")
const router = express.Router()

const {memberController} = require('../controllers')

router
    .get('/get-users', memberController.findUsers)
    .post('/friend/add', memberController.addFriend)
    .get('/friend/find-all', memberController.findFriends)

module.exports = router