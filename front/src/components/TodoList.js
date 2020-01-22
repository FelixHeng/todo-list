import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../context/todos.context";

import { Paper, List, Divider, Box } from "@material-ui/core";

// function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
function TodoList() {
  const todos = useContext(TodosContext);
  if (todos.length)
    return (
      <Box style={{ marginBottom: "7rem" }}>
        <List>
          {todos.map((todo, i) => (
            <React.Fragment key={i}>
              <TodoItem
                {...todo}
                key={todo.id}
                // task={todo.task}
                // category={todo.category}
                // date={todo.date}
                // key={todo.id}
                // userId={todo.userId}
                // completed={todo.completed}
                // removeTodo={removeTodo}
                // toggleTodo={toggleTodo}
                // editTodo={editTodo}
              />
              {i < todos.length - 1 && <Divider />}
              {/* another option: {i < todos.length - 1 ? <Divider /> : ""} */}
            </React.Fragment>
          ))}
        </List>
      </Box>
    );
  return null;
}

export default TodoList;
