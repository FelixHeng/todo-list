import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";

export default function Authenticated({ auth }) {
  return (
    <div>
      <Button component={Link} to={"/"} color="inherit" onClick={auth}>
        Logout
      </Button>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </div>
  );
}
