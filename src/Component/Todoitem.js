import React, { useContext,memo } from "react";
import useToggle from "../Hook/useToggle";
import EditForm from "../Hook/useEditForm";
import { TodoContext, DispatchContext} from "../Context/Todocontext";

 function Todoitem(props) {
  const [isEdditing, toggleForm] = useToggle(false);
  const dispatch = useContext(DispatchContext);
  console.log("Todo RENDER:", props.work)
  return (
    <div>
      <section>
        {isEdditing ? (
          <EditForm
            editId={props.id}
            editTaskVal={props.work}
            toggleDone={toggleForm}
          />
        ) : (
          <li
            className="list-group-item text-break"
            style={{ textDecoration: props.done ? "line-through" : null }}
          >
            <input
              className="position-absolute top-50 start-0"
              value={props.done}
              type="checkbox"
              onClick={() => {
                //toggleTask(props.id);
                dispatch({type: "TOGGLE" ,todoId: props.id})
              }}
            />
            {props.work}
            <i
              className="fas fa-solid fa-trash position-absolute top-50 end-0"
              onClick={() => {
                //dltTask(props.id);
                dispatch({type: "REMOVE" ,todoId: props.id})
              }}
            />
            <i
              className="fas fa-edit position-absolute top-0 end-0"
              onClick={toggleForm}
            />
          </li>
        )}
      </section>
    </div>
  );
}

export default memo(Todoitem)
