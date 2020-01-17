import { useState } from "react";
import uuid from "uuid/v4";

export default initialTodos => {
  const [todos, setTodos] = useState("");
  return {
    todos,
    addTodo: (newTodoText, newCategory) => {
      setTodos([
        ...todos,
        {
          id: uuid(),
          task: newTodoText,
          category: newCategory,
          completed: false
        }
      ]);
    }
  };
};
