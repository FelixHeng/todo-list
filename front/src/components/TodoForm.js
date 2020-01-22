import React, { useState, useContext } from "react";
import axios from "axios";
import useInputState from "../hooks/useInputState";
import useToggleState from "../hooks/useToggleState";
import Category from "./Category";
import { DispatchContext } from "../context/todos.context";

//npm install date-fns@next @date-io/date-fns
import DateFnsUtils from "@date-io/date-fns";
import { format } from "date-fns";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker
} from "@material-ui/pickers";

import { Button, ListItem, Grid } from "@material-ui/core";

import { green } from "@material-ui/core/colors";
import AddIcon from "@material-ui/icons/Add";

// function TodoForm({ addTodo }) {
function TodoForm() {
  const [category, setCategory] = useState("Others");
  const [value, handleChange, reset] = useInputState("");
  const [isAdding, toggle] = useToggleState(false);
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  const [selectedDate, handleDateChange] = useState(new Date());
  const dateSql = selectedDate
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
  const date = selectedDate.toLocaleString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  const handleSubmit = event => {
    const body = {
      value: value,
      category: category,
      userId: userId,
      date: dateSql
    };
    dispatch({
      type: "ADD",
      task: body.value,
      id: body.userId,
      category: body.category,
      date: body.date
    });

    console.log("date sql ----", dateSql);
    console.log("body --------------------", body);

    axios.post("http://localhost:5000/todo", body).then(
      res => console.log("resss todoo", res)
      // err => setFlash(err.data.flash),

      // res => console.log("resss", res.data.flash),
      // res => console.log("data", res.flash),
      // res => console.log("flash", res.data.flash),
    );
    event.preventDefault();
    if (!value) return;
    // we use context
    // addTodo(value, category, userId, date);
    reset();
    toggle();
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (!value) return;
  //   addTodo(value, category, userId, date);
  //   reset();
  //   toggle();
  // };

  const handleChangeCat = value => {
    setCategory(value);
  };

  const dispatch = useContext(DispatchContext);

  return (
    <ListItem>
      {isAdding ? (
        <Grid container justify="center">
          <form>
            <Category
              value={value}
              valueChange={handleChange}
              setCategory={handleChangeCat}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <div className="pickers">
                <DatePicker value={selectedDate} onChange={handleDateChange} />
                <TimePicker value={selectedDate} onChange={handleDateChange} />
              </div>
            </MuiPickersUtilsProvider>
            {/* <ListItemSecondaryAction> */}
            <Grid container style={{ marginTop: "1.2rem" }} justify="center">
              <Button
                onClick={handleSubmit}
                variant="outlined"
                style={{
                  color: green[500],
                  borderColor: green[500],
                  fontWeight: "bolder"
                }}
              >
                Add Task
              </Button>
              <Button onClick={toggle}>Cancel</Button>
            </Grid>
            {/* </ListItemSecondaryAction> */}
          </form>
        </Grid>
      ) : (
        <Grid container justify="center">
          <Button
            onClick={toggle}
            style={{
              fontSize: "1rem",
              padding: "1rem"
            }}
          >
            <AddIcon />
            Add task
          </Button>
        </Grid>
      )}
    </ListItem>
  );
}

export default TodoForm;
