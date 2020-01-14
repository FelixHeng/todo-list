import React, { useState } from "react";
import useToggleState from "../hooks/useToggleState";
import EditTodoForm from "../components/EditTodoForm";

import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  makeStyles,
  Button,
  Box,
  Grid
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Todo({
  id,
  task,
  category,
  date,
  userId,
  completed,
  removeTodo,
  editTodo
}) {
  const [isEditing, toggle] = useToggleState(false);
  const [done, setDone] = useState(false);
  const workColors = "#3498DB";
  const personalColors = "#E74C3C";
  const socialColors = "#1ABC9C";
  const readingColors = "#873600";
  const lifeColors = "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)";
  const othersColors = "#717D7E";

  let catColors = othersColors;
  if (category === "Work") {
    catColors = workColors;
  } else if (category === "Personal") {
    catColors = personalColors;
  } else if (category === "Social") {
    catColors = socialColors;
  } else if (category === "Reading") {
    catColors = readingColors;
  } else if (category === "Life Goals") {
    catColors = lifeColors;
  } else if (category === "Others") {
    catColors = othersColors;
  }

  const useStyles = makeStyles({
    category: {
      background: catColors,
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      pointerEvents: "none"
    }
  });
  const classes = useStyles();
  console.log("iddddd", id);
  return (
    <ListItem>
      <Grid container justify="center">
        <Grid
          item
          xs={10}
          md={8}
          lg={5}
          style={{ marginTop: "0.5rem", alignContent: "center" }}
        >
          <Box
            border={1}
            borderRadius={10}
            style={{ backgroundColor: "white" }}
          >
            <ListItemText
              style={{
                textDecoration: done ? "line-through" : "none"
              }}
            >
              <Box style={{ display: "flex" }}>
                <Box flexGrow={1}>
                  <Checkbox
                    tabIndex={-1}
                    checked={completed}
                    onClick={() => setDone(!done)}
                  />
                  <Button className={classes.category}>{category}</Button>
                </Box>
                <Box display="flex" justifyContent="flex-end">
                  <IconButton aria-label="Edit" onClick={toggle}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="Delete"
                    onClick={() => removeTodo(id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>

              {isEditing ? (
                <EditTodoForm
                  editTodo={editTodo}
                  id={id}
                  task={task}
                  category={category}
                  date={date}
                  userId={userId}
                  toggleEditForm={toggle}
                />
              ) : (
                <div style={{ marginLeft: "0.7rem", width: "80%" }}>{task}</div>
              )}

              <Box
                style={{
                  marginLeft: "0.7rem",
                  marginTop: "0.3rem",
                  width: "45%",
                  padding: "0.3rem"
                }}
              >
                {date}
                {userId}
              </Box>
              {/* <ListItemSecondaryAction> */}
              {/* </ListItemSecondaryAction> */}
            </ListItemText>
          </Box>
        </Grid>
      </Grid>
    </ListItem>
  );
}

export default Todo;
