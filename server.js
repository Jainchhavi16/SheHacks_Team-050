const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  let data = {
    message: "Hello World!",
  };
  res.status(200).send(data);
});
app.post("/", (req, res) => {
  let data = {
    message: "Hello World!" + req.body.msg,
  };
  res.status(200).send({ data });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});
