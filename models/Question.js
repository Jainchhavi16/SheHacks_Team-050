const mongoose = require("mongoose");
const QuestionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  text: { type: String, required: true },
  answer: { type: String, required: true },
  type: { type: Number, required: true },
  difficulty: { type: Number, required: true },
  tname: {
    type: String,
  },
  options: {
    type: Map,
  },
});
module.exports = mongoose.model("Question", QuestionSchema);
