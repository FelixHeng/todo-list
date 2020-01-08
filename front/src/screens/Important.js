import React from "react";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core/";
import TodoBar from "../components/common/TodoBar";

function Important() {
  return (
    <div>
      <TodoBar />
      IMPORTANT TO DO
      <Button component={Link} to={"/"}>
        Go back to Home
      </Button>
    </div>
  );
}

export default Important;
