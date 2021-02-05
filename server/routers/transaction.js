const express = require("express")
const router = express.Router()

const {transactionController} = require('../controllers')

router
    .get('/request/list', transactionController.requestList)
    .get('/pending/list', transactionController.pendingList)
    .post('/transaction/new', transactionController.processTransaction)

module.exports = router