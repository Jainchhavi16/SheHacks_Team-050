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

router.patch('/courses', async (req, res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['subject', 'title', 'description']
    const isValidOperation =updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!'})
    }
    try {
        const course = await Course.findOne({title: req.body.title})
        if(!course) {
            return res.status(404).send()
            }
            updates.forEach((update)=> course[update]= req.body[update])
            await course.save()
           res.send(course)
        }catch(e) {
            res.status(500).send(e)
        } 
    
})

router.delete('/courses', async (req, res) => {
    try{
        const course = await Course.findOne({title: req.body.title}) 
        if(!course) {
            return res.status(404).send()
            }
            await course.remove()
           res.send(course)
        }catch(e) {
            res.status(500).send(e)

    }
})

module.exports = router
