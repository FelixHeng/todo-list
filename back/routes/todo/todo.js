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

router.get("/:id/all", (req, res, next) => {
  const userId = req.params.id;
  connection.query(
    `SELECT * FROM todos WHERE users_id=${userId} `,
    (err, result) => {
      if (err) {
        console.log(err);

        res.status(500).send("error");
      } else {
        console.log("results : ", result);
        res.status(200).send(result);
      }
    }
  );
});

module.exports = router;
