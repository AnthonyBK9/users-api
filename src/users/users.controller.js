const uuid = require('uuid')


const usersDB = [
    { 
        id: 'e9a3255d-7b01-4318-acd4-cd51ef7c9bb4',
        first_name: 'Antonio', 
        last_name: 'Bermudez',
        email: 'bermudez@gmail.com',
        password: 'root',
        birthday: '1997/04/02'
    },
    { 
        id: '5a6b9929-cac4-42d6-bb1c-12f706e21349',
        first_name: 'Viridina', 
        last_name: 'Flores',
        email: 'flores@gmail.com',
        password: '123456',
        birthday: '1999/04/02'
    }
]

const getAllUsers = () => {
    return usersDB
}

const getUserById = (id) => {
    const data = usersDB.find(user => user.id === id)
    return data
}

const createUser = (user) => {
    const newUser = {
        id: uuid.v4(),
        first_name: user.first_name, 
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        birthday: user.birthday,
    }
    usersDB.push(newUser)
    return newUser
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}