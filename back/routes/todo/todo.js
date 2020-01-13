const express = require("express");
const connection = require("../../helpers/db");
const router = express.Router();

router.post("/", (req, res, next) => {
  const todo = {
    task: req.body.value,
    todo_at: req.body.date,
    users_id: req.body.userId,
    categories_id: req.body.category
  };
  console.log("todooooo", todo);

  connection.query(
    "INSERT INTO todos SET ?",
    todo,
    (error, results, fields) => {
      if (error) {
        console.log(error);
        res.status(500).send(`Erooooororooo`);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

router.get("/today", (req, res) => {
  const today = {};
});

module.exports = router;
