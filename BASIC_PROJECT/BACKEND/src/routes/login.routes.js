


const express = require("express")
const jwt = require("jsonwebtoken")
const router = express.Router()


const loginController = require("../controllers/login.controller")


router.post('/login', loginController.loginController)


module.exports = router