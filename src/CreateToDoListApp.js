import React, { useState } from "react";
import CreateFieldAndButtonContainer from "./CreateFieldAndButtonContainer";
import CreateItemListContainer from "./CreateItemListContainer";

export default function CreateToDoListApp({ toDoItemList }) {
  const [toDoList, setToDoList] = useState(toDoItemList);
  const [newItemName, setNewItemName] = useState("");

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
