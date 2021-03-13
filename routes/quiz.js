const express = require("express");
const router = express.Router();

const Question = require("../models/Question");
const Score = require("../models/Score");

global.s = 20;

//adds question to the entered category
router.post("/", (req, res) => {
  const question = new Question();
  //1->Long/Short
  //2->MCQS
  if (req.body.type == 2) {
    question.category = req.body.category; //subject id/name
    question.text = req.body.text;
    question.email = req.body.email;
    question.type = req.body.type;
    question.difficulty = req.body.difficulty;
    question.answer = req.body.answer;
    question.tname = req.body.tname;
    question.options = req.body.options;
    question.save((err, doc) => {
      if (!err)
        res.status(200).send({ message: "Question inserted", question });
      else console.log(err);
    });
  } else {
    question.category = req.body.category; //subject id/name
    question.text = req.body.text;
    question.type = req.body.type;
    question.difficulty = req.body.difficulty;
    question.answer = req.body.answer;
    question.tname = req.body.tname;
    question.save((err, doc) => {
      if (!err)
        res.status(200).send({ message: "Question inserted", question });
      else console.log(err);
    });
  }
});

//submit quiz -> quiz/submit
router.post("/submit", (req, res) => {
  let email = req.body.email;
  let category = req.body.category;
  let newvalue = new Score({
    email: email,
    category: category,
    score: s,
  });
  newvalue.save((err, doc) => {
    if (err) res.status(400).send("Failed to Submit");
    else
      res
        .status(200)
        .send({ message: "Successfully Submitted", score: s, doc });
  });
});

module.exports = router;
