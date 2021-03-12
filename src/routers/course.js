const express = require('express')
const router = new express.Router()
const Course = require('../models/course')

router.post('/courses', async (req, res) => {
    const course = new Course(req.body)
    try{
        await course.save()
        res.status(201).send(course)
    }
    catch(error) {
        res.status(400)
        res.send(error)
    }
})

router.get('/courses', async (req, res) => {
    try{
        const courses = await Course.find({})
        res.status(200).send(courses)
    }catch(error){
        res.status(500).send(error)
    }
})

module.exports = router