import React from "react";
import TodoItem from "./TodoItem";

import { Paper, List, Divider } from "@material-ui/core";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <>
            <TodoItem
              id={todo.id}
              task={todo.task}
              date={todo.date}
              key={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {i < todos.length - 1 && <Divider />}
            {/* another option: {i < todos.length - 1 ? <Divider /> : ""} */}
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
