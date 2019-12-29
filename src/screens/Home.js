import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  MenuItem,
  MenuList
} from "@material-ui/core";
import TodoApp from "../components/TodoApp";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  title: {
    variant: "h6"
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <AppBar color="primary" position="static" style={{ height: "10vh" }}>
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Welcome to your Todo List
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container>
        <Grid item xs={12} md={8} lg={4}>
          <MenuList
            style={{
              paddingTop: "1.5rem",
              height: "85.8vh",
              // for responsive width ?
              // https://material-ui.com/components/use-media-query/#migrating-from-withwidth
              width: "40vh",
              backgroundColor: "pink"
            }}
          >
            <MenuItem component={Link} to={"/today"}>
              <Typography className={classes.title}>Today</Typography>
            </MenuItem>
            <MenuItem component={Link} to={"/tomorrow"}>
              <Typography className={classes.title}>Tomorrow</Typography>
            </MenuItem>
            <MenuItem component={Link} to={"/important"}>
              <Typography className={classes.title}>Important</Typography>
            </MenuItem>
            <MenuItem component={Link} to={"/seven"}>
              <Typography className={classes.title}>Next Seven days</Typography>
            </MenuItem>
            <MenuItem component={Link} to={"/someday"}>
              <Typography className={classes.title}>Someday</Typography>
            </MenuItem>
          </MenuList>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          lg={5}
          justify="center"
          style={{ marginTop: "2rem" }}
        >
          <TodoApp />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
