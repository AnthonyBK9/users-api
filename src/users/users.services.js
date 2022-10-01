const { getAllUsers, getUserById, createUser } = require('./users.controller')

const getAll = (req, res) => {
    const data = getAllUsers()
    res.status(200).json(data)
}

const getUserId = (req, res) => {
    const id = req.params.id
    const data = getUserById(id)
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({ message: 'Invalid ID'})
    }
}

const createNewUser = (req, res) => {
    const data = req.body
    if (data) {
        const info = createUser(data)
        res.status(201).json(info)
    } else {
        res.status(401).json({ message: 'Missing Data' })
    }
}

module.exports = {
    getAll,
    getUserId,
    createNewUser,
}