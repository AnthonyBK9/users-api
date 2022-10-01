const express = require('express')
const userRoute = require('./users/users.router')

const app = express()
const port = 5000
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Servidor on'})
})

app.use('/api/v1',userRoute)

app.listen(port, () => {
    console.log('Server corriendo en el puerto: ', port);
})