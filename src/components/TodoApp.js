import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodoState from "../hooks/useTodoState";

import { Paper } from "@material-ui/core";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Wash car", completed: false },
    { id: 2, task: "Buy a New pc", completed: false },
    { id: 3, task: "Learn chinese", completed: false }
  ];
  const [todos, setTodos] = useState(initialTodos);
  // const { todos, addTodo } = useTodoState(initialTodos);
  return (
    <Paper>
      {/* <TodoForm addTodo={addTodo} /> */}
      <TodoList todos={todos} />
    </Paper>
  );
}

export default TodoApp;
