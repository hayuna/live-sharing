const express = require('express')
const UserController = require('../controllers/user.controller')


const router = express.Router()

router
    .route('/')
    .get(UserController.getAll)
    .post(UserController.addUser)


router
    .route('/:id')
    .get(UserController.findUser)

module.exports = router
