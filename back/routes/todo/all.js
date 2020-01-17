const express = require("express");
const connection = require("../../helpers/db");
const router = express.Router();

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
  const userId = req.params.userId;
  const taskId = req.params.id;
  const task = req.body.task;
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
