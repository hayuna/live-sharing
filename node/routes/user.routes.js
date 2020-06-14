const express = require('express')
const UserController = require('../controllers/user.controller')


const router = express.Router()

router
    .route('/')
    .get(UserController.getAll)
    .post(UserController.addUser)

module.exports = router
