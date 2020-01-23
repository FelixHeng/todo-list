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
      return (
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
        axios
          .put(
            `http://localhost:5000/todo/${action.userId}/all/${action.id}`,
            action.body
          )
          .then(response => response.data)
          .then(data => {
            console.log(data);
            window.location.reload();
          })
        // };
      );
  }
};

export default reducer;
