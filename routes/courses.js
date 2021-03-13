const express = require("express");
const router = new express.Router();
const Course = require("../models/course");
const Question = require("../models/Question");
//get all courses created by the teacher
// /courses
router.post("/", async (req, res) => {
  let email = req.body.email;
  let courses = await Course.find({ email: email });
  if (courses) res.status(200).send(courses);
  else res.status(500).send({ message: "No courses found" });
});

//get all questions created by that teacher
router.post("/questions", async (req, res) => {
  let email = req.body.email;
  let questions = await Question.find({ email: email });
  if (questions.length) res.status(200).send(questions);
  else
    res
      .status(500)
      .send({ message: "No Quiz Questions created by you.Create one now" });
});

module.exports = router;
