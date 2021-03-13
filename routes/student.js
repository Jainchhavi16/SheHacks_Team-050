const express = require("express");
const router = new express.Router();
const Student = require("../models/Student");

//student clicks enroll
// /student/enroll
router.post("/enroll", async (req, res) => {
  const email = req.body.email;
  const courseID = req.body.courseID;
  try {
    let user = await Student.find({ email: email });
    if (user.length) {
      Student.update(
        { email: email },
        {
          $push: {
            courseID: [req.body.courseID],
          },
        },
        (err, success) => {
          if (err) console.log(err);
          else console.log(success);
        }
      );
      res.status(200).send(user);
    } else {
      const student = new Student();
      student.email = email;
      student.courseID = courseID;
      student.save((err, doc) => {
        if (!err) res.status(200).send({ message: "Course added", doc });
        else console.log(err);
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// -> student/courses ->Get all courses of student
router.post("/courses", async (req, res) => {
  try {
    let email = req.body.email;
    const courses = await Student.find({ email: email });
    console.log(courses);
    if (courses) res.status(200).send(courses);
    else res.status(500).send({ message: "No enrolled courses" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
