const express = require('express')
const UserController = require('../controllers/user.controller')


const router = express.Router()

router
    .route('/')
    .get(UserController.getAll)
    .post(UserController.addUser)
    .delete(UserController.deleteAllUsers)


router
    .route('/:id')
    .get(UserController.findUser)
    .patch(UserController.modifyUser)
    .delete(UserController.deleteUser)

router
    .route('/findUsersWithName/:name')
    .get(UserController.findUsersWithName)

router
    .route('/init')
    .post(UserController.init)

module.exports = router