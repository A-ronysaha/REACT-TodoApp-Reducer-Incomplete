import { useState,useEffect } from "react";
const { v4: uuidv4 } = require("uuid");
function Reducer(state, action) {
    // const initialTodos = JSON.parse(window.localStorage.getItem("Todo")) || [
    //     { id: 1, task: "Clean the Floor", completed: false }
    //   ];
    //   const [todos, setTodos] = useState(initialTodos);
    //   useEffect(() => {
    //     window.localStorage.setItem("Todo", JSON.stringify(todos));
    //   }, [state]);
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuidv4(), task: action.do, completed: false }];
    case "REMOVE":
      return state.filter((t) => t.id !== action.todoId);
    case "TOGGLE":
      return state.map((t) =>
        t.id === action.todoId ? { ...t, completed: !t.completed } : t
      );
    case "EDIT":
      const editTask = state.map((t) =>
        t.id === action.todoId ? { ...t, task: action.newTask } : t
      );
      return editTask;
    default:
      return state;
  }
}

export default Reducer
