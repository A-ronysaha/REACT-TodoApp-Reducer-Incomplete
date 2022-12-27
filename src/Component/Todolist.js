import React,{useContext} from "react";
import Todoitem from "./Todoitem";
import { TodoContext } from "../Context/Todocontext";

export default function Todolist(props) {
     const todos = useContext(TodoContext) 
    return (
      <div>
        <ul className="list-group list-group-flush mb-3 ">
          {todos.map((t) => (
            <Todoitem
              id={t.id}
              work={t.task}
              key={t.id}
              done={t.completed}
            //   remove={props.dltTodo}
            //   toggleForm={props.toggle}
            //   editForm={props.edit}
            />
          ))}
        </ul>
      </div>
    );
}