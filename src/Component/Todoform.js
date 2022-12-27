import React , {useContext}from "react";
import useInput from "../Hook/useInput";
import { TodoContext , DispatchContext} from "../Context/Todocontext";

export default function Todoform() {
  const [todoValue, handleChange, update] = useInput("");
  const dispatch = useContext(DispatchContext)
  console.log("TODO FORM RENDER")
  
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //addTask(todoValue);
          dispatch({type: "ADD" ,do: todoValue})
          update();
        }}
      >
        <div className="mb-5">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h4 className="text-center text-decoration-underline">Todo_Form</h4>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={todoValue}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn btn-primary">Add Todo</button>
      </form>
    </div>
  );
}