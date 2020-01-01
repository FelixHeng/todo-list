import React, { useState } from "react";
import useInputState from "../hooks/useInputState";
import useToggleState from "../hooks/useToggleState";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker,
  DateTimePicker
} from "@material-ui/pickers";

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
  const [selectedDate, handleDateChange] = useState(new Date());
  const date = selectedDate.toString();
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value, date);
    reset();
    toggle();
  };
  return (
    <ListItem>
      {isAdding ? (
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!value) return;
            addTodo(value, date);
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
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="pickers">
              <DatePicker value={selectedDate} onChange={handleDateChange} />
              <TimePicker value={selectedDate} onChange={handleDateChange} />
              {/* <DateTimePicker value={selectedDate} onChange={handleDateChange} /> */}
            </div>
          </MuiPickersUtilsProvider>
          <ListItemSecondaryAction>
            <Button
              onClick={handleSubmit}
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
