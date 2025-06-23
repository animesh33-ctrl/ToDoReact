import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  handleAddButtonClicked: () => {},
  handleDeleteItem: () => {},
});

const itemsReducer = (currItems, action) => {
  let newitems = currItems;
  if (action.type === "NEW_ITEM") {
    newitems = [
      ...currItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newitems = currItems.filter((item) => item.name != action.payload.itemName);
  }
  return newitems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchItems] = useReducer(itemsReducer, []);

  const handleAddButtonClicked = (itemName, itemDueDate) => {
    const newAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchItems(newAction);
  };

  const handleDeleteItem = (todoItemName) => {
    const delItems = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchItems(delItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        handleAddButtonClicked,
        handleDeleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
