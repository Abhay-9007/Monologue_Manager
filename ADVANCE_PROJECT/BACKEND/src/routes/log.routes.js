

// const userModel = require("../models/user.model")


const express = require("express")
const router = express.Router()

const logController = require("../controllers/log.controller")

const logModel = require("../models/logs.model")

router.post('/create', logController.logController)


module.exports = router
