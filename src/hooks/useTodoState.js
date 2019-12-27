import { useState } from "react";
import uuid from "uuid/v4";

export default initialTodos => {
  const [todos, setTodos] = useState("");
  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    }
  };
};
