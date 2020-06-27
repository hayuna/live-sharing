const router = require('express').Router()
const UserController = require('../controllers/user.controller')
const { validateBody, validateId, schema } = require('../validations/user.validation')

router
    .route('/')
    .get(UserController.getAll)
    .post(validateBody(schema.user.post), UserController.addUser)
    .delete(UserController.deleteAllUsers)

router
    .route('/:id')
    .get(validateId(schema.id), UserController.findUser)
    .patch(validateId(schema.id), validateBody(schema.user.patch), UserController.modifyUser)
    .delete(validateId(schema.id), UserController.deleteUser)

router
    .route('/findUsersWithName/:name')
    .get(UserController.findUsersWithName)

router
    .route('/init')
    .post(UserController.init)

module.exports = router