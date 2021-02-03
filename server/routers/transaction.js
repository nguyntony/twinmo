const express = require("express")
const router = express.Router()

const {transactionController} = require('../controllers')

router
    .get('/request/list', transactionController.requestList)
    .get('/pending/list', transactionController.pendingList)

module.exports = router