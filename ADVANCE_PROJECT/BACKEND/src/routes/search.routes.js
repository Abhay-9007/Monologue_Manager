


const express = require("express")
const jwt = require("jsonwebtoken")
const router = express.Router()


const searchController = require("../controllers/search.controller")


router.post('/search', searchController.searchController)


module.exports = router