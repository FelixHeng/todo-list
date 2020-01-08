import React from "react";
import TodoBar from "../components/common/TodoBar";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";

function SevendDays() {
  return (
    <div>
      <TodoBar />
      TODO IN THE NEXT 7 DAYS
      <Button component={Link} to={"/"}>
        Go back to Home
      </Button>
    </div>
  );
}

export default SevendDays;
