const mongoose = require("mongoose");
const ScoreSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  score: { type: Number, required: true },
  time: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Score", ScoreSchema);
