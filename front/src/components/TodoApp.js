import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodoState from "../hooks/useTodoState";
import axios from "axios";

import { Paper, Divider } from "@material-ui/core";
import uuid from "uuid/v4";

import { TodosProvider } from "../context/todos.context";

function TodoApp() {
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  // const addTodo = (newTodoText, newCategory, newUserId, newDate) => {
  //   setTodos([
  //     ...todos,
  //     {
  //       id: uuid(),
  //       category: newCategory,
  //       task: newTodoText,
  //       userId: newUserId,
  //       date: newDate,
  //       completed: false
  //     }
  //   ]);
  // };

  // const removeTodo = todoId => {
  //   const updatedTodos = todos.filter(todo => todo.id !== todoId);
  //   setTodos(updatedTodos);
  // };

  // const toggleTodo = todoId => {
  //   const updatedTodos = todos.map(todo =>
  //     todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
  //   );
  //   setTodos(updatedTodos);
  // };

  // const editTodo = (id, value) => {
  //   const updatedTodos = todos.map(todo =>
  //     todo.id === id
  //       ? {
  //           ...todo,
  //           task: value,
  //           id: id
  //         }
  //       : todo
  //   );
  //   setTodos(updatedTodos);
  //   const body = { task: value };
  //   axios
  //     .put(`http://localhost:5000/todo/${userId}/all/${id}`, body)
  //     .then(response => response.data)
  //     .then(data => {
  //       console.log(data);
  //       window.location.reload();
  //     });
  // };

  // console.log("setTodossss", todos);
  return (
    <Paper>
      <TodosProvider>
        <TodoForm
        // addTodo={addTodo}
        />
        <TodoList
        // todos={todos}
        // removeTodo={removeTodo}
        // toggleTodo={toggleTodo}
        // editTodo={editTodo}
        />
      </TodosProvider>
    </Paper>
  );
  // setTodos();
}

export default TodoApp;
