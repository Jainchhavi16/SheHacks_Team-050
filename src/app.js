const express = require('express')
require('./db/mongoose')
const Course = require('./models/course')
// to put routes in separate files 
const courseRouter = require('./routers/course')
 

const app =  express()

app.use(express.json())
app.use(courseRouter)


module.exports = app