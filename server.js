const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const authenticate = require('./routes/auth/authenticate-middleware.js')
const authRouter = require('./routes/auth/auth-router.js')
const usersRouter = require('./routes/users/users-router')
const valuesRouter = require('./routes/values/values-router.js')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/users', authenticate, usersRouter) 
server.use('/api/values', valuesRouter)

module.exports = server