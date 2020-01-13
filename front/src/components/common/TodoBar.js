import React, { useState } from "react";
import { Link } from "react-router-dom";

import LeftDrawer from "./LeftDrawer";
import Authenticated from "./Authenticated";
import NotAuthenticated from "./NotAuthenticated";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const TodoBar = ({ auth }) => {
  const classes = useStyles();

  const loggedOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    window.location.reload();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#0D5FAD" }}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          > */}
          <LeftDrawer />
          {/* </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Welcome
          </Typography>
          {auth !== null ? (
            <Authenticated auth={loggedOut} />
          ) : (
            <NotAuthenticated />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TodoBar;
