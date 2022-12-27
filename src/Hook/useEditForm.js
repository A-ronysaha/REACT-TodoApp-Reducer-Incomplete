import React , { useContext } from "react";
import useInput from "./useInput";
import { TodoContext, DispatchContext} from "../Context/Todocontext";

export default function EditForm({editTodo,editId,editTaskVal,toggleDone}) {
  const [editValue, handleChange, reset] = useInput(editTaskVal);
  const dispatch = useContext(DispatchContext)
  console.log("EDIT FORM RENDER")
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //editTodo(editId,editValue);
         // editTask(editId,editValue)
         dispatch({type: "EDIT", todoId: editId , newTask: editValue})
          reset();
          toggleDone()
          
        }}
      >
        <textarea value={editValue} onChange={handleChange} />
        <button>
          {" "}
          <i className="fas fa-check" />
        </button>
      </form>
    </div>
  );
}