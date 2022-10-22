import React, { useState, useEffect } from "react";
import CreateFieldAndButtonContainer from "./CreateFieldAndButtonContainer";
import CreateItemListContainer from "./CreateItemListContainer";

export default function CreateToDoListApp() {
  const [toDoList, setToDoList] = useState([]);
  const [newItemName, setNewItemName] = useState("");

  // Retrieve last todo list from local storage...
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("get-stored-todo-list"));
    if (items !== null && items.length > 1) {
      setToDoList(items);
    }
  }, [setToDoList]);

  return (
    <div>
      <CreateFieldAndButtonContainer
        newItemName={newItemName}
        toDoList={toDoList}
        setToDoList={setToDoList}
        setNewItemName={setNewItemName}
      />
      <CreateItemListContainer toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}
