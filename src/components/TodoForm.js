import React from "react";
import useInputState from "../hooks/useInputState";

import { Paper, TextField } from "@material-ui/core";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!value) return;
          addTodo(value);
          reset();
        }}
        style={{ padding: "1rem" }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          label="Add new todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
