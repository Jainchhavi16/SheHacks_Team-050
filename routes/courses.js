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

// router.patch("/", async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ["subject", "title", "description"];
//   const isValidOperation = updates.every((update) =>
//     allowedUpdates.includes(update)
//   );
//   if (!isValidOperation) {
//     return res.status(400).send({ error: "Invalid updates!" });
//   }
//   try {
//     const course = await Course.findOne({ title: req.body.title });
//     if (!course) {
//       return res.status(404).send();
//     }
//     updates.forEach((update) => (course[update] = req.body[update]));
//     await course.save();
//     res.send(course);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

// router.delete("/", async (req, res) => {
//   try {
//     const course = await Course.findOne({ title: req.body.title });
//     if (!course) {
//       return res.status(404).send();
//     }
//     await course.remove();
//     res.send(course);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

module.exports = router;
