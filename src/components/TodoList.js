import React from "react";
import { Paper, List, ListItem, ListItemText } from "@material-ui/core";

function TodoList({ todos }) {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <ListItem>
            <ListItemText>{todo.task}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
