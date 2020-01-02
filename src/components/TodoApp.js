import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodoState from "../hooks/useTodoState";

import { Paper } from "@material-ui/core";
import uuid from "uuid/v4";

function TodoApp() {
  const initialTodos = [
    {
      id: 1,
      task: "Wash car",
      category: "social",
      date: "yesterday,",
      completed: false
    },
    {
      id: 2,
      task: "Buy a New pc",
      category: "personal",
      date: "today",
      completed: false
    },
    {
      id: 3,
      task: "Learn chinese",
      category: "reading",
      date: "tomorrow",
      completed: false
    }
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTodoText, newCategory, newDate) => {
    setTodos([
      ...todos,
      {
        id: uuid(),
        task: newTodoText,
        category: newCategory,
        date: newDate,
        completed: false
      }
    ]);
  };

  const removeTodo = todoId => {
    // filter out removed todo
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    // call setTodos with new todos array
    setTodos(updatedTodos);
  };

  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTask, newCategory, newDate) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId
        ? { ...todo, task: newTask, category: newCategory, date: newDate }
        : todo
    );
    setTodos(updatedTodos);
  };

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
