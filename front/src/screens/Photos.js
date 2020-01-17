import React, { useState, useEffect } from "react";
import TodoBar from "../components/common/TodoBar";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import Task from "../components/Task";
import { Link } from "react-router-dom";
import {
  Button,
  Grid,
  Checkbox,
  ListItemText,
  List,
  Box,
  makeStyles,
  Typography
} from "@material-ui/core/";
import axios from "axios";

function Photos() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));

  const useStyles = makeStyles(theme => ({
    container: {
      alignItems: "center",
      justify: "center",
      display: "flex",
      flexDirection: "column"
    },
    title: {
      textAlign: "center",
      color: "#0D5FAD",
      fontWeight: 200,
      fontSize: 80,
      fontFamily: "Pacifico"
    },
    quote: {
      textAlign: "center",
      color: "#0D5FAD",
      fontWeight: 600,
      fontSize: 25,
      fontFamily: "Poiret One",
      letterSpacing: "3px",
      marginTop: "1rem"
    },
    category: {
      // background: catColors,
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      pointerEvents: "none"
      // textTransform: "none"
    }
  }));

  const classes = useStyles();
  return (
    <div>
      <TodoBar auth={loggedIn} />
      <Grid container className={classes.container}>
        <Typography className={classes.title}>Photos</Typography>
        <Typography className={classes.quote}>
          A picture is a poem without words...
        </Typography>
      </Grid>
    </div>
  );
}

export default Photos;
