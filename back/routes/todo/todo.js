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

router.delete("/:userId/all/:id", (req, res, next) => {
  const userId = req.params.userId;
  const taskId = req.params.id;
  console.log(req.body);
  connection.query(
    `DELETE FROM todos WHERE users_id=${userId} AND id = ${taskId}`,
    taskId,
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

router.put("/:userId/all/:id", (req, res) => {
  // const body = {
  //   task: req.body.value,
  //   todo_at: req.body.date,
  //   users_id: req.body.userId,
  //   categories_id: req.body.category
  // };
  const userId = req.params.userId;
  const taskId = req.params.id;
  const task = req.body.task;
  console.log("REQUEST ===============", req.body);
  connection.query(
    `UPDATE todos SET task = '${task}' WHERE users_id=${userId} AND id = ${taskId}`,
    (err, results) => {
      if (err) {
        res.status(500).send(`Error`);
        console.log(err);
      } else {
        res.status(200).send("OK");
      }
    }
  );
});

module.exports = router;
