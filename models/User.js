const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
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
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  saltSecret: String,
});

module.exports = mongoose.model("User", UserSchema);
