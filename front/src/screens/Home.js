import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TodoBar from "../components/common/TodoBar";

import {
  Toolbar,
  Typography,
  Grid,
  MenuItem,
  MenuList
} from "@material-ui/core";
import TodoApp from "../components/TodoApp";
import { makeStyles } from "@material-ui/styles";
import { amber } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  container: {
    alignItems: "center",
    justify: "center",
    display: "flex",
    flexDirection: "column",
    marginTop: "2rem"
  },
  menulist: {
    variant: "h6"
  },
  title: {
    textAlign: "center",
    color: "#0D5FAD",
    fontWeight: 200,
    fontSize: 120,
    fontFamily: "Pacifico"
  },
  quote: {
    textAlign: "center",
    color: "#0D5FAD",
    fontWeight: 600,
    fontSize: 25,
    fontFamily: "Poiret One",
    letterSpacing: "3px"
  }
}));

function Home() {
  const classes = useStyles();
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  return (
    <div>
      {/* <AppBar color="primary" position="static" style={{ height: "10vh" }}>
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Welcome to your Todo List
          </Typography>
        </Toolbar>
      </AppBar> */}
      <TodoBar auth={loggedIn} />
      <Grid container className={classes.container}>
        <Typography className={classes.title}>Todo</Typography>
        <Typography className={classes.quote}>
          Every journey begins with a single step...
        </Typography>
      </Grid>
      <Grid container justify="center">
        {/* <Grid item xs={12} md={8} lg={4}>
          <MenuList
            style={{
              margin: "1.2rem 0 0 1.2rem",
              padding: "1.5rem 0 1.5rem 1.5rem",
              height: "auto",
              // for responsive width ?
              // https://material-ui.com/components/use-media-query/#migrating-from-withwidth
              width: "15vw",
              backgroundColor: "pink",
              borderRadius: "10%"
            }}
          >
            <MenuItem component={Link} to={"/today"}>
              <Typography className={classes.menulist}>Today</Typography>
            </MenuItem>
            <MenuItem component={Link} to={"/tomorrow"}>
              <Typography className={classes.menulist}>Tomorrow</Typography>
            </MenuItem>
            <MenuItem component={Link} to={"/important"}>
              <Typography className={classes.menulist}>Important</Typography>
            </MenuItem>
            <MenuItem component={Link} to={"/seven"}>
              <Typography className={classes.menulist}>
                Next Seven days
              </Typography>
            </MenuItem>
            <MenuItem component={Link} to={"/someday"}>
              <Typography className={classes.menulist}>Someday</Typography>
            </MenuItem>
          </MenuList>
        </Grid> */}
        <Grid
          item
          xs={10}
          md={8}
          lg={5}
          style={{ marginTop: "2rem", alignContent: "center" }}
        >
          <TodoApp />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
