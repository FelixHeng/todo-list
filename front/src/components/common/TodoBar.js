import React from "react";
import { Link } from "react-router-dom";

import LeftDrawer from "./LeftDrawer";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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

export default function TodoBar() {
  const classes = useStyles();

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
          <Button component={Link} to={"/login"} color="inherit">
            Login
          </Button>
          <Button component={Link} to={"/signup"} color="inherit">
            Sign up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
