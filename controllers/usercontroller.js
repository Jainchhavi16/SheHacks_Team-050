const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const config = require("config");
const secretOrKey = config.get("secretOrKey");
module.exports.register = (req, res, next) => {
  const user = new User();
  user.displayName = req.body.displayName;
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  user.image = req.body.image;
  user.rollNo = req.body.rollNo;
  user.password = req.body.password;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) console.log(err);
      user.password = hash;
      user.saltSecret = salt;
      user.save((err, doc) => {
        if (!err) res.status(200).send(doc);
        else {
          if (err.code == 11000)
            res.status(422).send(["Duplicate email address found"]);
          else return next(err);
        }
      });
    });
  });
};
module.exports.login = (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(email, password);
  User.findOne({ email }).then((user) => {
    if (!user)
      return res.status(404).json({ emailnotfound: "Email not found" });
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        };
        jwt.sign(
          payload,
          secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
              user: user,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
};
