const express = require('express')
const router = new express.Router()
const CourseContent = require('../models/CourseContent')
const multer = require('multer')
const sharp = require('sharp')

//validating file upload
const filepdf = multer({
    
    limits:{
        fileSize:1000000
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/)) {
            return cb(new Error('Please upload a file'))
        }
        cb(undefined, true)
    }
})


router.post('/',filepdf.single('filepdf'), async(req, res)=>{
   const courseContent = new CourseContent({title:"M151"})
   try{
    const buffer = await sharp(req.file.buffer).toBuffer()
    console.log(buffer)
        courseContent.files =  courseContent.files.concat({file:buffer})
        await courseContent.save()
        res.status(200).send(courseContent)
   }
   catch(e){
       res.status(400).send(e)
   }
})

module.exports = router