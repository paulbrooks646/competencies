require("dotenv").config()
const express = require("express")
const massive = require("massive")
const session = require("express-session")
const userController = require("./userController.js")
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

const app = express()

app.use(express.static(`${__dirname}/../build`))

app.use(express.json())

app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},
    secret: SESSION_SECRET
}))

app.post('/api/register', userController.register)
app.post('/api/login', userController.login)
app.delete('/api/logout', userController.logout)
app.get('/api/user', userController.getUser)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then( db => {
    app.set("db", db)
    console.log('We have a connection!')
    app.listen(SERVER_PORT, () => console.log(`Port ${SERVER_PORT}!`))
}).catch(err => console.log(err))



