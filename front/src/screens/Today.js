import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import TodoList from "../components/TodoList";
import TodoApp from "../components/TodoApp";

function Today() {
  // const initialTodos = [
  //   { id: 1, task: "Wash car", date: "yesterday,", completed: false },
  //   { id: 2, task: "Buy a New pc", date: "today", completed: false },
  //   { id: 3, task: "Learn chinese", date: "tomorrow", completed: false }
  // ];
  const [todos, setTodos] = useState("");
  const today = todoId => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  };
  return (
    <div>
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Welcome to your Todo List</Typography>
        </Toolbar>
      </AppBar>
      <Button component={Link} to={"/"}>
        Home
      </Button>
    </div>
  );
}

export default Today;