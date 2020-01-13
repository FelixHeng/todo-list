import React, { useState, useEffect } from "react";
import TodoBar from "../components/common/TodoBar";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import Task from "../components/Task";
import { Link } from "react-router-dom";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  List,
  Divider
} from "@material-ui/core/";
import axios from "axios";

function AllTasks() {
  const [all, setAll] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem("id"));

  useEffect(() => {
    axios.get(`http://localhost:5000/todo/${userId}/all`).then(
      res => setAll(res.data),
      res => console.log("get res", res.data)
    );
  }, []);

  return (
    <div>
      <TodoBar />
      All your Tasks
      <Button component={Link} to={"/"}>
        Go back to Home
      </Button>
      <List>
        <div>
          {all.map(task => (
            <Task task={task.task} />
          ))}
        </div>
      </List>
    </div>
  );
}

export default AllTasks;
