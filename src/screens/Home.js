import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Paper,
  Button
} from "@material-ui/core";
import TodoApp from "../components/TodoApp";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  title: {
    variant: "h6",
    display: "flex",
    justifyContent: ""
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <AppBar color="primary" position="static" style={{ height: "10vh" }}>
        <Toolbar>
          <Typography className={classes.title} color="inherit">
            Welcome to your Todo List
          </Typography>
          <Button component={Link} to={"/today"}>
            <Typography className={classes.title}>Today</Typography>
          </Button>
          <Button component={Link} to={"/seven"}>
            <Typography className={classes.title}>Next Seven days</Typography>
          </Button>
          <Button component={Link} to={"/important"}>
            <Typography className={classes.title}>Important</Typography>
          </Button>
        </Toolbar>
      </AppBar>

      <Grid container justify="center" style={{ marginTop: "2rem" }}>
        <Grid item xs={12} md={8} lg={4}>
          <TodoApp />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
