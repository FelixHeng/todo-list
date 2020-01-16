const express = require("express");
const connection = require("../../helpers/db");
const router = express.Router();

router.get("/:id/seven", (req, res, next) => {
  const userId = req.params.id;
  connection.query(
    `SELECT *, DATE_FORMAT(todos.todo_at, '%Y-%m-%d') FROM todos WHERE users_id=${userId} AND DATE(todo_at) BETWEEN CURDATE() + 1 AND CURDATE() + 7 `,
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

router.delete("/:userId/seven/:id", (req, res, next) => {
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

router.put("/:userId/seven/:id", (req, res) => {
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
