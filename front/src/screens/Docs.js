import React from "react";
import TodoBar from "../components/common/TodoBar";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";

function Docs() {
  return (
    <div>
      <TodoBar />
      MY DOCS
      <Button component={Link} to={"/"}>
        Go back to Home
      </Button>
    </div>
  );
}

export default Docs;
