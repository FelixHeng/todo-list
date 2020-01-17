import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodoState from "../hooks/useTodoState";
import axios from "axios";

import { Paper, Divider } from "@material-ui/core";
import uuid from "uuid/v4";

function TodoApp() {
  const initialTodos = [
    // {
    //   id: 1,
    //   task: "Wash car",
    //   category: "social",
    //   date: "yesterday,",
    //   completed: false
    // },
    // {
    //   id: 2,
    //   task: "Buy a New pc",
    //   category: "personal",
    //   date: "today",
    //   completed: false
    // },
    // {
    //   id: 3,
    //   task: "Learn chinese",
    //   category: "reading",
    //   date: "tomorrow",
    //   completed: false
    // }
  ];
  const [todos, setTodos] = useState(initialTodos);
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  const addTodo = (newTodoText, newCategory, newUserId, newDate) => {
    setTodos([
      ...todos,
      {
        id: uuid(),
        category: newCategory,
        task: newTodoText,
        userId: newUserId,
        date: newDate,
        completed: false
      }
    ]);
  };

  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (id, value) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id
        ? {
            ...todo,
            task: value,
            id: id
          }
        : todo
    );
    setTodos(updatedTodos);
    const body = { task: value };
    axios
      .put(`http://localhost:5000/todo/${userId}/all/${id}`, body)
      .then(response => response.data)
      .then(data => {
        console.log(data);
        window.location.reload();
      });
  };

  console.log("setTodossss", todos);
  return (
    <Paper>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </Paper>
  );
  setTodos();
}

export default TodoApp;
