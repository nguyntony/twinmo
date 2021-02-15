const express = require("express")
const router = express.Router()

const {transactionController} = require('../controllers')

router
    .get('/request/list', transactionController.requestList)
    .get('/payment/list', transactionController.paymentList)
    .post('/transaction/new', transactionController.processTransaction)
    .put('/transaction/user-approve', transactionController.processUserApprove)
    .put('/transaction/user-deny', transactionController.processUserDeny)
    .put('/transaction/archive', transactionController.archive)
    .post('/transaction/archive/list', transactionController.archivedList)
    .get('/transaction/archive/date-list', transactionController.monthlyCache)

module.exports = router