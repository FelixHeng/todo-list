import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function NotAuthenticated() {
  return (
    <div>
      <Button component={Link} to={"/login"} color="inherit">
        Login
      </Button>
      <Button component={Link} to={"/signup"} color="inherit">
        Sign up
      </Button>
    </div>
  );
}
