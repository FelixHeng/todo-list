import React, { useState } from "react";
import useInputState from "../hooks/useInputState";
import useToggleState from "../hooks/useToggleState";
import Category from "./Category";
//npm install date-fns@next @date-io/date-fns
import DateFnsUtils from "@date-io/date-fns";
import { format } from "date-fns";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker
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
  const [category, setCategory] = useState("Others");
  const [value, handleChange, reset] = useInputState("");
  const [isAdding, toggle] = useToggleState(false);
  const [selectedDate, handleDateChange] = useState(new Date());
  const date = selectedDate.toLocaleString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value, category, date);
    reset();
    toggle();
  };
  const handleChangeCat = value => {
    setCategory(value);
  };
  return (
    <ListItem>
      {isAdding ? (
        <form style={{ padding: "1rem" }}>
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
