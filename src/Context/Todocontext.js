import React, { createContext, useReducer } from "react";
import Todostate from "../Hook/useTodoappState";
import Todoreducer from "../Reducer/Todoreduce";
const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
];
export const TodoContext = createContext();
export const DispatchContext = createContext();

export function TodoProvider(props) {
  // const todostuff = Todostate(defaultTodos)
  const [todos, dispatch] = useReducer(Todoreducer, defaultTodos);
  return (
    <TodoContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
    </TodoContext.Provider>
  );
}
