import React from "react";
import useInputState from "../hooks/useInputState";

import { TextField } from "@material-ui/core";

function EditTodoForm({
  editTodo,
  id,
  task,
  category,
  date,
  toggleEditForm,
  userId
}) {
  const [value, handleChange, reset] = useInputState(task);
  console.log("editodoform OK", value);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value, category, date, userId);
        reset();
        toggleEditForm();
        console.log("valuuuue", value);
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField value={value} onChange={handleChange} fullWidth autoFocus />
    </form>
  );
}

export default EditTodoForm;
