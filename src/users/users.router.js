const router = require('express').Router()
const usersService = require('./users.services')

router.get('/users', usersService.getAll)
router.get('/users/:id', usersService.getUserId)
router.post('/users', usersService.createNewUser)

module.exports = router
