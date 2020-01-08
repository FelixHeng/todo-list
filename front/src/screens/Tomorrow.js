import React from "react";
import TodoBar from "../components/common/TodoBar";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core/";

function Tomorrow() {
  return (
    <div>
      <TodoBar />
      THIS IS FOR TOMORROW
      <Button component={Link} to={"/"}>
        Go back to Home
      </Button>
    </div>
  );
}

export default Tomorrow;
