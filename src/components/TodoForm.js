import React from "react";
import useInputState from "../hooks/useInputState";
import useToggleState from "../hooks/useToggleState";

import {
  Paper,
  TextField,
  Button,
  ListItemSecondaryAction,
  ListItem
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  const [isAdding, toggle] = useToggleState(false);
  return (
    <ListItem>
      {isAdding ? (
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!value) return;
            addTodo(value);
            reset();
            toggle();
          }}
          style={{ padding: "1rem" }}
        >
          <TextField
            value={value}
            onChange={handleChange}
            label="Add new todo"
          />
          <TextField
            id="date"
            label="Schedule"
            type="date"
            defaultValue="2020-01-01"
          />
          <ListItemSecondaryAction>
            <Button
              onClick={() => {
                if (!value) return;
                addTodo(value);
                reset();
                toggle();
              }}
              variant="contained"
              color="secondary"
            >
              Add Task
            </Button>
            <Button onClick={toggle}>Cancel</Button>
          </ListItemSecondaryAction>
        </form>
      ) : (
        <Button onClick={toggle} style={{ padding: "1rem" }}>
          <AddIcon style={{ padding: "1rem" }} />
          Add task
        </Button>
      )}
    </ListItem>
  );
}

export default TodoForm;
