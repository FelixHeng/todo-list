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

function Tomorrow() {
  const [all, setAll] = useState([]);
  const [task, setTask] = useState("tesssst");
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

  const removeTodo = id => {
    axios
      .delete(`http://localhost:5000/todo/${userId}/tomorrow/${id}`)
      .then(response => response.data)
      .then(() => {
        window.location.reload();
      });
    // const updatedAll = all.filter(todo => todo.id !== todoId);
    // setAll(updatedAll);
  };

  const toggleTodo = id => {
    const updatedAll = all.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setAll(updatedAll);
  };

  const editTodo = (id, value) => {
    const updatedTodos = all.map(todo =>
      todo.id === id
        ? {
            ...todo,
            task: value,
            id: id
          }
        : todo
    );
    setAll(updatedTodos);
    console.log("all", all);
    const body = { task: value };
    axios
      .put(`http://localhost:5000/todo/${userId}/tomorrow/${id}`, body)
      .then(response => response.data)
      .then(data => {
        console.log(data);
        // window.location.reload();
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/todo/${userId}/tomorrow`).then(
      res => setAll(res.data),
      res => console.log("get res", res.data)
    );
  }, []);

  return (
    <div>
      <TodoBar auth={loggedIn} />
      <Grid container className={classes.container}>
        <Typography className={classes.title}>Tomorrow's tasks</Typography>
        <Typography className={classes.quote}>
          Do something today for a better tomorrow...
        </Typography>
      </Grid>
      <List>
        <div>
          {all.map((todo, i) => (
            <Task
              todos={all}
              task={todo.task}
              date={todo.todo_at}
              category={todo.categories_id}
              removeTodo={() => removeTodo(todo.id)}
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

export default Tomorrow;
