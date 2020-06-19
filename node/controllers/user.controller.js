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
        const user = await userSchema.find({ _id: req.params.id })
        res.json(user)
    } catch (err) {
        res.send(err)
    }
}

const findUsersWithName = async (req, res) => {
    try {
        const user = await userSchema.find({ name: req.params.name })
        res.json(user)
    } catch (err) {
        res.send(err)
    }
}

const modifyUser = async (req, res) => {
    try {
        const user = await userSchema.updateOne(
            { _id: req.params.id },
            { name: req.body.name },
        );
        res.json(user)
    } catch (err) {
        res.send(err)
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await userSchema.deleteOne({ _id: req.params.id });
        res.json(user)
    } catch (err) {
        res.send(err)
    }
}

const deleteAllUsers = async (req, res) => {
    try {
        const user = await userSchema.deleteMany({});
        res.json(user)
    } catch (err) {
        res.send(err)
    }
}

const init = async (req, res) => {
    const userList = [
        { name: 'John', email: 'john@email.pl' },
        { name: 'John', email: 'john@email.pl' },
        { name: 'John', email: 'john@email.pl' },
        { name: 'John', email: 'john@email.pl' },
        { name: 'John', email: 'john@email.pl' },
        { name: 'John', email: 'john@email.pl' },
        { name: 'John', email: 'john@email.pl' },
        { name: 'John', email: 'john@email.pl' },
        { name: 'John', email: 'john@email.pl' },
        { name: 'John', email: 'john@email.pl' },
    ]

    try {
        console.log(req.body)
        const user = await userSchema.insertMany(userList)
        res.json(user)
    } catch (err) {
        res.send(err)
    }
}

module.exports = { getAll, addUser, findUser, findUsersWithName, modifyUser, deleteUser, deleteAllUsers, init }
