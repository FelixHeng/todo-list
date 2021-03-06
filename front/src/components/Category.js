import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

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

export default function Category({ value, valueChange, setCategory }) {
  const classes = useStyles();
  const [cat, setCat] = useState("");
  const handleChange = event => {
    setCategory(event.target.value);
    setCat(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel>Todo</InputLabel>
        <BootstrapInput value={value} onChange={valueChange} />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel>Category</InputLabel>
        <NativeSelect
          value={cat}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option value={"Othersdzdzdzdzdz"}>Category</option>
          <option value={"Work"}>Work</option>
          <option value={"Personal"}>Personal</option>
          <option value={"Social"}>Social</option>
          <option value={"Reading"}>Reading</option>
          <option value={"Life Goals"}>Life Goals</option>
          <option value={"Others"}>Others</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
