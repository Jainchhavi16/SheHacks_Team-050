const mongoose = require('mongoose')

const courseContentSchema = new mongoose.Schema({
    title: {
      type: String,
    //   required: true,
      trim: true,
    //   unique: true,
    },
    files: [{
        file: {
            type:Buffer
        }
    }]
  });

const CourseContent = mongoose.model("CourseContent", courseContentSchema);

module.exports = CourseContent;