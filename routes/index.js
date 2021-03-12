const express = require("express");
const router = express.Router();

const ctrlUser = require("../controllers/usercontroller");

router.post("/register", ctrlUser.register);
router.post("/login", ctrlUser.login);
// app.get("/", function (req, res) {
//   let data = {
//     message: "Hello World!",
//   };
//   res.status(200).send(data);
// });
// app.post("/", (req, res) => {
//   let data = {
//     message: "Hello World!" + req.body.msg,
//   };
//   res.status(200).send({ data });
// });
module.exports = router;
