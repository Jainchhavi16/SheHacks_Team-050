const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  rollNo: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
  },
  childrollno: {
    type: String,
  },
  saltSecret: String,
});

module.exports = mongoose.model("User", UserSchema);
