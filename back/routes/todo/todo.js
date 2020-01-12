const express = require("express");
const connection = require("../../helpers/db");
const router = express.Router();

router.post("/", (req, res, next) => {
  const todo = {
    task: req.body.task,
    todo_at: req.body.todo_at,
    users_id: req.body.users_id,
    categories_id: req.body.categories_id
  };
  console.log("todooooo", todo);

  connection.query(
    "INSERT INTO todos SET ?",
    todo,
    (error, results, fields) => {
      if (error) {
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
