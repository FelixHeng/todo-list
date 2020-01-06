const express = require("express");
const connection = require("../../helpers/db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtSecret = require("./jwtSecret");

const passport = require("passport");
const bcrypt = require("bcrypt");

// Register page
router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      console.log("req booodyyy", req.body);
      const user = {
        email: req.body.email,
        password: hash,
        name: req.body.name,
        lastname: req.body.lastname
      };

      connection.query(
        "INSERT INTO users SET ?",
        user,
        (error, results, fields) => {
          if (error) {
            res.status(500).json({ flash: error.message });
          } else {
            res.status(200).json({ flash: "User has been signed up !" });
          }
        }
      );
    }
  });
});

// Login page
router.post("/login", (req, res, next) => {
  passport.authenticate(
    "local",
    {
      successRedirect: "/profile",
      failureRedirect: "/login",
      failureFlash: true
    },
    (err, user, info) => {
      if (err) return res.status(500).send(err);
      if (!user) return res.status(400).json({ info: info.message });
      const token = jwt.sign({ user }, jwtSecret);
      return res.json({ user, token });
    }
  )(req, res, next);
});

module.exports = router;
