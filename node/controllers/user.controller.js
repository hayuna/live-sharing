const userSchema = require('../models/user.schema.js')

const getAll = async (req, res) => {
    try {
        const response = await userSchema.find()
        res.json(response)
    } catch (err) {
        res.send(err)
    }
}

const addUser = async (req, res) => {
    try {
        console.log(req.body)
        const user = await userSchema.insertMany({ name: req.body.name, email: req.body.email })
        res.json(user)
    } catch (err) {
        res.send(err)
    }
}

const findUser = async (req, res) => {
    try {
        console.log(req.body)
        console.log(req.params.id)
        const user = await userSchema.find({ _id: req.params.id })
        res.json(user)
    } catch (err) {
        res.send(err)
    }
}

module.exports = { getAll, addUser, findUser }
