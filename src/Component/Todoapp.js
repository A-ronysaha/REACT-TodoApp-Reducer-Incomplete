import React  from "react";
import Todolist from "./Todolist";
import Todoform from "./Todoform";
import Todostate from "../Hook/useTodoappState";
import { TodoProvider } from "../Context/Todocontext";

export default function Todoapp() {
  // const initialTodos = JSON.parse(window.localStorage.getItem("Todo")) || [
  //   { id: 1, task: "Clean the Floor", completed: false },
  //   { id: 2, task: "Wash Car", completed: false },
  //   { id: 3, task: "Grow Plant", completed: false },
  // ];
  // const { todos, addTask, dltTodo, toggle, editTask } =
  //   Todostate(initialTodos);

  // useEffect(() => {
  //   window.localStorage.setItem("Todo", JSON.stringify(todos));
  // }, [todos]);

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand">Todoapp Using HOOK</a>
        </div>
      </nav>
      <h1 className="text-center text-decoration-underline">Todo_List...</h1>
      <TodoProvider>
        <div className="offset-1 card w-75 mb-3">
          <div className="card-body">
            <Todolist
              // todoTask={todos}
              // dltTodo={removeTodo}
              // toggle={toggleTodo}
              //editTask={editTodo}
            />
          </div>
        </div>
        <div className="offset-3 card text-center w-50 my5 mt-5">
          <Todoform
          //  addTask={addTodo} 
          />
        </div>
      </TodoProvider>
    </div>
  );
}
