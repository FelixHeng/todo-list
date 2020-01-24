import React, { useState, useContext } from "react";
import useInputState from "../hooks/useInputState";
import { DispatchContext } from "../context/todos.context";
import axios from "axios";
import useToggleState from "../hooks/useToggleState";

import { TextField } from "@material-ui/core";

function EditTodoForm({
  // editTodo,
  id,
  task,
  userId,
  category,
  date,
  toggleEditForm
  //   userId
}) {
  const dispatch = useContext(DispatchContext);
  const [isAdding, toggle] = useToggleState(false);
  const [value, handleChange, reset] = useInputState(task);
  const [selectedDate, handleDateChange] = useState(new Date());
  const dateSql = selectedDate
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  console.log("editodoform OK", value);

  // const date = selectedDate.toLocaleString("fr-FR", {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   hour: "2-digit",
  //   minute: "2-digit"
  // });

  const handleSubmit = event => {
    const body = {
      value: value,
      category: category,
      userId: userId,
      date: dateSql,
      id: id
    };
    dispatch({
      type: "EDIT",
      id: body.id,
      newTask: body.value,
      category: body.category,
      date: date,
      userId: body.userId
    });

    console.log("date sql ----", dateSql);
    console.log("body --------------------", body);

    axios
      .put(
        `http://localhost:5000/todo/${userId}/all/${id}`,
        body
        // action.body
      )
      .then(response => response.data)
      .then(data => {
        console.log(data);
        window.location.reload();
      });
    // err => setFlash(err.data.flash),

    // res => console.log("resss", res.data.flash),
    // res => console.log("data", res.flash),
    // res => console.log("flash", res.data.flash),
    // );
    event.preventDefault();
    if (!value) return;
    // we use context
    // addTodo(value, category, userId, date);
    reset();
    toggle();
  };

  return (
    <form
      onSubmit={
        handleSubmit
        //   e => {
        //   e.preventDefault();
        //   // editTodo(id, value, category, date, userId);
        //   dispatch({
        //     type: "EDIT",
        //     id: id,
        //     newTask: value,
        //     category: category,
        //     date: date,
        //     userId: userId
        //   });
        //   reset();
        //   toggleEditForm();
        //   console.log("valuuuue", value);
        // }
      }
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField value={value} onChange={handleChange} fullWidth autoFocus />
    </form>
  );
}

export default EditTodoForm;
