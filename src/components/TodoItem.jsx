import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import {TodoItemsContext} from "../store/to-do-items-store";

function TodoItem({ todoName, todoDate }) {
  const { handleDeleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => handleDeleteItem(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
