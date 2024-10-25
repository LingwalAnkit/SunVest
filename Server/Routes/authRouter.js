const express = require('express')
const AuthController = require("../Controller/AuthController")

const router = express.Router()

router.post('/signup' , AuthController.SignUser)
router.post('/login' , AuthController.LoginUser)

module.exports = router