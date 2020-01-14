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
  Typography
} from "@material-ui/core/";
import axios from "axios";

function Today() {
  const [all, setAll] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));

  const useStyles = makeStyles(theme => ({
    container: {
      alignItems: "center",
      justify: "center",
      display: "flex",
      flexDirection: "column"
    },
    title: {
      textAlign: "center",
      color: "#0D5FAD",
      fontWeight: 200,
      fontSize: 80,
      fontFamily: "Pacifico"
    },
    quote: {
      textAlign: "center",
      color: "#0D5FAD",
      fontWeight: 600,
      fontSize: 25,
      fontFamily: "Poiret One",
      letterSpacing: "3px",
      marginTop: "1rem"
    },
    category: {
      // background: catColors,
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      pointerEvents: "none"
      // textTransform: "none"
    }
  }));

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

  // useEffect(() => {
  //   axios.get(`http://localhost:5000/todo/${userId}/today`).then(
  //     res => setAll(res.data),
  //     res => console.log("get res", res.data)
  //   );
  // }, []);
  // console.log(all);

  return (
    <div>
      <TodoBar auth={loggedIn} />
      <Grid container className={classes.container}>
        <Typography className={classes.title}>Today's tasks</Typography>
        <Typography className={classes.quote}>
          Today is full of possible...
        </Typography>
      </Grid>
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

export default Today;
