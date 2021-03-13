const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
var passport = require("passport");

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Passport config
require("./config/passport")(passport);
app.use(passport.initialize());

app.use("/", require("./routes/index"));
app.use("/course", require("./routes/course"));
app.use("/quiz", require("./routes/quiz"));
app.use("/courses", require("./routes/courses"));
app.use("/student", require("./routes/student"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});
