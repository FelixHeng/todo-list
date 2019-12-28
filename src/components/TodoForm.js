import React from "react";
import useInputState from "../hooks/useInputState";
import useToggleState from "../hooks/useToggleState";

import { Paper, TextField, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  const [isAdding, toggle] = useToggleState(false);
  return (
    <Paper>
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
        </form>
      ) : (
        <Button onClick={toggle} style={{ padding: "1rem" }}>
          <AddIcon style={{ padding: "1rem" }} />
          Add task
        </Button>
      )}
    </Paper>
  );
}

export default TodoForm;
