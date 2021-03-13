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
  //   let user = Student.findOne({ email: req.body.email });
  //   if (user) {
  //     console.log("update");
  //     Student.update(
  //       { email: email },
  //       {
  //         $push: {
  //           courseID: courseID,
  //         },
  //       }
  //     );
  //   } else {
  //     console.log("user not found");
  //     //   const student = new Student();
  //     //   student.email = email;
  //     //   student.courseID = courseID;
  //     //   student.save((err, doc) => {
  //     //     if (!err) res.status(200).send({ message: "Course added", doc });
  //     //     else console.log(err);
  //     //   });
  //   }
});

// -> student/courses
router.post("/courses", (req, res) => {
  const email = req.body.email;
  const courses = Student.find({ email: email });
  console.log(courses);
  if (courses.length) res.status(200).send(courses);
  else res.status(500).send({ message: "No enrolled courses" });
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
