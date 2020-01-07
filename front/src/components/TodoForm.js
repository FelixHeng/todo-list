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
  ListItem,
  Grid
} from "@material-ui/core";

import { green } from "@material-ui/core/colors";
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
            style={{ padding: "1rem", fontSize: "1rem" }}
          >
            <AddIcon style={{ padding: "1rem" }} />
            Add task
          </Button>
        </Grid>
      )}
    </ListItem>
  );
}

export default TodoForm;
