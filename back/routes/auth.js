const express = require("express");
const connection = require("../helpers/db");
const router = express.Router();
const jwt = require("jsonwebtoken");

const passport = require("passport");
const bcrypt = require("bcrypt");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("IT WORKS");
  console.log(res);
});

router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      console.log("Req BODY -------", req.body);
      var post = {
        email: req.body.email,
        password: hash,
        name: req.body.name,
        lastname: req.body.lastname
      };

      connection.query("INSERT INTO users SET ?", post, function(
        error,
        results,
        fields
      ) {
        if (error) {
          res.status(500).json({ flash: error.message });
        } else {
          console.log("results :", results);
          console.log(post);
          res.status(200).json({ flash: "User has been signed up!" });
        }
      });
    }
  });
});

module.exports = router;
