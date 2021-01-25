const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)

const app = express()
dotenv.config({ path: './config/config.env' })
connectDB()


//midleware
//body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
//Sessions
app.use(session({
 secret: 'keyboard cat',
 resave: false,
 saveUninitialized: false,
 store: new MongoStore({ mongooseConnection: mongoose.connection })
}))



app.use('/api/books', require('./routes/books'))
app.use('/api/autors', require('./routes/autors'))


const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server Running in ${process.env.PORT} mode on por ${PORT}`))