const express = require("express")
const router = express.Router()

const {requireLogin} = require('../auth.js')

router
    .get("*", requireLogin)


module.exports = router