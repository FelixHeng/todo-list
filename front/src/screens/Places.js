import React from "react";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";

function Places() {
  return (
    <div>
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Welcome to your Todo List</Typography>
        </Toolbar>
      </AppBar>
      PLACES
      <Button component={Link} to={"/"}>
        Go back to Home
      </Button>
    </div>
  );
}

export default Places;
