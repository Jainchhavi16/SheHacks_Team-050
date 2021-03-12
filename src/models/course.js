const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    subject: {
          type: String,
          required: true,
          trim: true
    },
    title:{
          type: String,
          required: true,
          trim: true,
          unique: true,
    },
    description:{
        type: String,
        required: true,
        trim: true
    }
})

const Course = mongoose.model('Course', courseSchema)

module.exports = Course