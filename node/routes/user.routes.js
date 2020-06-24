const UserController = require('../controllers/user.controller')
const Router = require('express-promise-router')
const { validateParam, validateBody, schema, schemaId } = require('../validations/user.validation')

const router = Router()

router
    .route('/')
    .get(UserController.getAll)
    .post(validateBody(schema), UserController.addUser)
    .delete(UserController.deleteAllUsers)


router
    .route('/:id')
    .get(validateParam(schemaId, 'id'), UserController.findUser)
    .patch([validateParam(schemaId, 'id'), validateBody(schema)], UserController.modifyUser) //add validation and test
    .delete(validateParam(schemaId, 'id'), UserController.deleteUser) // add validation and test

router
    .route('/findUsersWithName/:name')
    .get(UserController.findUsersWithName)

router
    .route('/init')
    .post(UserController.init)

module.exports = router