const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  courseID: {
    type: [String],
  },
  comments: [{ body: String, date: Date }],
});

module.exports = mongoose.model("Student", studentSchema);
