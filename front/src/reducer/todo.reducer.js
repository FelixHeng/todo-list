import uuid from "uuid/v4";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: uuid(),
          task: action.task,
          category: action.category,
          completed: false,
          date: action.date,
          userId: action.userId
        }
      ];

    case "REMOVE":
      return (
        // state.filter(todo => todo.id !== action.id)
        axios
          .delete(
            `http://localhost:5000/todo/${action.userId}/all/${action.id}`
          )
          .then(response => response.data)
          .then(() => {
            window.location.reload();
          })
      );

    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case "EDIT":
      return [
        ...state,
        {
          id: uuid(),
          // id: action.id,
          task: action.newTask,
          category: action.category,
          completed: false,
          date: action.date,
          userId: action.userId
        }
      ];
    // return (
    //      const editTodo = (id, value) => {
    //     const updatedTodos = all.map(todo =>
    //       todo.id === id
    //     ? {
    //         ...todo,
    //         task: value,
    //         id: id
    //       }
    //     : todo
    // );
    // setAll(updatedTodos);
    // console.log("all", all);
    // const body = { task: value };
    // state.map(todo =>
    //   todo.id === action.id
    //     ? {
    //         ...todo,
    //         task: action.newTask,
    //         id: action.id,
    //         category: action.category,
    //         date: action.date,
    //         userId: action.userId
    //       }
    //     : todo
    // ),
    // axios
    //   .put(
    //     `http://localhost:5000/todo/${action.userId}/all/${action.id}`
    //     // action.body
    //   )
    //   .then(response => response.data)
    //   .then(data => {
    //     console.log(data);
    //     window.location.reload();
    //   })
    // };
    // );
  }
};

export default reducer;
