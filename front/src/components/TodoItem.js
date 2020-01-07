import React from "react";
import useToggleState from "../hooks/useToggleState";
import EditTodoForm from "../components/EditTodoForm";

import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
  makeStyles,
  Button,
  Box
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Todo({
  id,
  task,
  category,
  date,
  completed,
  removeTodo,
  toggleTodo,
  editTodo
}) {
  const [isEditing, toggle] = useToggleState(false);
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

  console.log("caaaat", catColors);
  console.log("value", category);
  const useStyles = makeStyles({
    category: {
      background: catColors,
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      pointerEvents: "none"
      // textTransform: "none"
    }
  });
  const classes = useStyles();
  // console.log("cateeee", category);
  // console.log("daaate", date);
  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          category={category}
          date={date}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{
              textDecoration: completed ? "line-through" : "none"
            }}
          >
            <Box style={{ display: "flex" }}>
              <Box flexGrow={1}>
                <Button className={classes.category}>{category}</Button>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <IconButton aria-label="Edit" onClick={toggle}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
            <div style={{ width: "80%" }}>{task}</div>
            <div>{date}</div>
            {/* <ListItemSecondaryAction> */}
            {/* </ListItemSecondaryAction> */}
          </ListItemText>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
