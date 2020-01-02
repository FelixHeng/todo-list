import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import useInputState from "../hooks/useInputState";
import TextField from "@material-ui/core/TextField";

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function Category({ value, onChange }) {
  const classes = useStyles();
  const [state, setState] = useState("");
  const handleChange = event => {
    setState(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel>Todo</InputLabel>
        <BootstrapInput value={value} onChange={onChange} />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel>Category</InputLabel>
        <NativeSelect
          value={state}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option value="" />
          <option value={10}>Work</option>
          <option value={20}>Personal</option>
          <option value={30}>Social</option>
          <option value={40}>Reading</option>
          <option value={50}>Life Goals</option>
          <option value={60}>Others</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
