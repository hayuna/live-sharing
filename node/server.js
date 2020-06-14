const express = require('express')
const dotenv = require('dotenv')
const userRoutes = require('./routes/user.routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


mongoose.connect('mongodb://localhost:27017/livecoding', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected'))
    .catch(err => console.log('error ', err))


const app = express()
app.use(bodyParser.json())
dotenv.config();

// console.log();

app.get('/', (request, response) => {
    response.send('cos ma sie wyswietlic')
})
app.get('/akuku', (request, response) => {
    response.send('niespodzianka')
})

app.use('/users', userRoutes)





app.listen(process.env.PORT, () => console.log('Listening...'))
