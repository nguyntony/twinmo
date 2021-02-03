const express = require("express");
const router = express.Router();

router
	.use("/api", require("./user"))
	.use("/api/member", require('./member'))
	.use('/api/member', require('./transaction'))

module.exports = router;