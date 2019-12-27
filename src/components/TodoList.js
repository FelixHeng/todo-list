import React from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@material-ui/core";

function TodoList({ todos }) {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <>
            <ListItem>
              <ListItemText>{todo.task}</ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
