import React from "react";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import TodoBar from "../components/common/TodoBar";

function Photos() {
  return (
    <div>
      <TodoBar />
      My PHOTOS
      <Button component={Link} to={"/"}>
        Go back to Home
      </Button>
    </div>
  );
}

export default Photos;
