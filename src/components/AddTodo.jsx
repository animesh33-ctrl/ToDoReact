import { useRef } from "react";
import { IoBagAddSharp } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  const todoElement = new useRef();
  const dueDateElement = new useRef();
  
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoElement.current.value = "";
    dueDateElement.current.value = "";

    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" ref={todoElement} />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <IoBagAddSharp />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
