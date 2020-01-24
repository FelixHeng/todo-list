import React, { useContext, useState, useEffect, useCallback } from "react";
import TodoBar from "../components/common/TodoBar";
import Task from "../components/Task";
import moment from "moment";
import fr from "moment/locale/fr";
import { Grid, List, makeStyles, Typography } from "@material-ui/core/";
import axios from "axios";
import { TodosContext } from "../context/todos.context";
import { TodosProvider } from "../context/todos.context";

function AllTasks() {
  const [loading, setLoading] = useState(true);
  const [all, setAll] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));

  const useStyles = makeStyles(theme => ({
    container: {
      alignItems: "center",
      justify: "center",
      display: "flex",
      flexDirection: "column"
    },
    title: {
      textAlign: "center",
      color: "#0D5FAD",
      fontWeight: 200,
      fontSize: 80,
      fontFamily: "Pacifico"
    },
    quote: {
      textAlign: "center",
      color: "#0D5FAD",
      fontWeight: 600,
      fontSize: 25,
      fontFamily: "Poiret One",
      letterSpacing: "3px",
      marginTop: "1rem"
    },
    category: {
      // background: catColors,
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      pointerEvents: "none"
      // textTransform: "none"
    }
  }));

  const classes = useStyles();

  // const removeTodo = id => {
  //   axios
  //     .delete(`http://localhost:5000/todo/${userId}/all/${id}`)
  //     .then(response => response.data)
  //     .then(() => {
  //       window.location.reload();
  //     });
  //   // const updatedAll = all.filter(todo => todo.id !== todoId);
  //   // setAll(updatedAll);
  // };

  // const toggleTodo = id => {
  //   const updatedAll = all.map(todo =>
  //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //   );
  //   setAll(updatedAll);
  // };

  // const editTodo = (id, value) => {
  //   const updatedTodos = all.map(todo =>
  //     todo.id === id
  //       ? {
  //           ...todo,
  //           task: value,
  //           id: id
  //         }
  //       : todo
  //   );
  //   setAll(updatedTodos);
  //   console.log("all", all);
  //   const body = { task: value };
  //   axios
  //     .put(`http://localhost:5000/todo/${userId}/all/${id}`, body)
  //     .then(response => response.data)
  //     .then(data => {
  //       console.log(data);
  //       window.location.reload();
  //     });
  // };

  const getTodos = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/todo/${userId}/all`
      );
      setAll(data);
      console.log("allllll", all);
      console.log("dataaaaa", data);
      console.log("userIdddd", userId);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [setAll]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  // useEffect(() => {
  //   axios.get(`http://localhost:5000/todo/${userId}/all`).then(
  //     res => setAll(res.data),
  //     res => console.log("get res", res.data)
  //   );
  // }, []);

  // const todos = useContext(TodosContext);
  return (
    <div>
      <TodoBar auth={loggedIn} />
      <Grid container className={classes.container}>
        <Typography className={classes.title}>All your Tasks</Typography>
        <Typography className={classes.quote}>
          First step is the hardest just make it...
        </Typography>
      </Grid>
      <List>
        {/* <TodosProvider> */}
        <div>
          {loading ? (
            <h2>Loading ...</h2>
          ) : (
            <>
              {all.map((todo, i) => (
                <React.Fragment key={i}>
                  <Task
                    {...todo}
                    key={todo.id}
                    todos={all}
                    task={todo.task}
                    date={moment(todo.todo_at)
                      .locale("fr")
                      .format("LLL")}
                    category={todo.categories_id}
                    userId={todo.users_id}
                    // removeTodo={() => removeTodo(todo.id)}

                    // toggleTodo={toggleTodo}
                    // editTodo={editTodo}
                    id={todo.id}
                  />
                </React.Fragment>
              ))}
            </>
          )}
          <Grid
            item
            xs={10}
            md={8}
            lg={5}
            style={{ marginTop: "2rem", alignContent: "center" }}
          ></Grid>
        </div>
        {/* </TodosProvider> */}
      </List>
    </div>
  );
}

export default AllTasks;
