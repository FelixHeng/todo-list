import React, { useContext } from "react";
import useInputState from "../hooks/useInputState";
import { DispatchContext } from "../context/todos.context";

import { TextField } from "@material-ui/core";

function EditTodoForm({
  // editTodo,
  id,
  task,
  //   category,
  //   date,
  toggleEditForm
  //   userId
}) {
  const [value, handleChange, reset] = useInputState(task);
  const dispatch = useContext(DispatchContext);
  console.log("editodoform OK", value);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        // editTodo(id, value, category, date, userId);
        dispatch({ type: "EDIT", id: id, newTask: value });
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
