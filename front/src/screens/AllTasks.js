import React, { useState, useEffect } from "react";
import TodoBar from "../components/common/TodoBar";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import Task from "../components/Task";
import { Link } from "react-router-dom";
import {
  Button,
  Grid,
  Checkbox,
  ListItemText,
  List,
  Box,
  makeStyles,
  IconButton
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";

function AllTasks() {
  const [all, setAll] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem("id"));

  const useStyles = makeStyles({
    category: {
      // background: catColors,
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      pointerEvents: "none"
      // textTransform: "none"
    }
  });
  const classes = useStyles();

  const removeTodo = todoId => {
    const updatedAll = all.filter(todo => todo.id !== todoId);
    setAll(updatedAll);
  };

  const toggleTodo = todoId => {
    const updatedAll = all.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setAll(updatedAll);
  };

  const editTodo = (todoId, newTask, newCategory, newDate, newUserId) => {
    const updatedAll = all.map(todo =>
      todo.id === todoId
        ? {
            ...todo,
            task: newTask,
            category: newCategory,
            date: newDate,
            userId: newUserId
          }
        : todo
    );
    setAll(updatedAll);
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/todo/${userId}/all`).then(
      res => setAll(res.data),
      res => console.log("get res", res.data)
    );
  }, []);
  console.log(all);

  return (
    <div>
      <TodoBar />
      All your Tasks
      <Button component={Link} to={"/"}>
        Go back to Home
      </Button>
      <List>
        <div>
          {all.map(todo => (
            <Task
              todos={all}
              task={todo.task}
              date={todo.todo_at}
              category={todo.categories_id}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              id={todo.id}
            />
          ))}

          <Grid
            item
            xs={10}
            md={8}
            lg={5}
            style={{ marginTop: "2rem", alignContent: "center" }}
          ></Grid>
        </div>
      </List>
    </div>
  );
}

export default AllTasks;
