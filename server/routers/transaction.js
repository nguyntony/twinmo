const express = require("express")
const router = express.Router()

const {transactionController} = require('../controllers')

router
    .get('/request/list', transactionController.requestList)
    .get('/pending/list', transactionController.pendingList)
    .post('/transaction/new', transactionController.processTransaction)
    .put('/transaction/user-approve', transactionController.processUserApprove)
    .put('/transaction/user-deny', transactionController.processUserDeny)

module.exports = router