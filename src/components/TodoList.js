import React from "react";
import TodoItem from "./TodoItem";

import { Paper, List, Divider } from "@material-ui/core";

function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <>
            <TodoItem
              id={todo.id}
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
