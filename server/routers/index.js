const express = require("express");
const router = express.Router();

router
	.use("/api", require("./user"))

module.exports = router;