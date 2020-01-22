import uuid from "uuid/v4";

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
      return state.filter(todo => todo.id !== action.id);

    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "EDIT":
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              task: action.newTask,
              id: action.id
            }
          : todo
      );
    // setTodos(updatedTodos);
    // const body = { task: value };
    // axios
    //   .put(`http://localhost:5000/todo/${userId}/all/${id}`, body)
    //   .then(response => response.data)
    //   .then(data => {
    //     console.log(data);
    //     window.location.reload();
    //   });
    default:
      return state;
  }
};

export default reducer;
