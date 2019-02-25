// --- Imports
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
// --- Connecting to db
mongoose.connect('mongodb://localhost/crud-mongo')
    .then( db => console.log('Db connected'))
    .catch( erro => console.log(err))

// --- Importing routes
const indexRoutes = require('./routes/index')
const registerRoutes = require('./routes/register')
const apiRoutes = require('./routes/api')
const loginRoutes = require('./routes/login')

// --- Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname + '/views'))
app.use(express.static(path.join(__dirname + '/public')))
app.set('view engine', 'ejs')


// --- Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// --- Routes
app.use('/', indexRoutes)
app.use('/register', registerRoutes)
app.use('/api', apiRoutes)
app.use('/login', loginRoutes)


// --- Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server online on port ${app.get('port')}`)
})