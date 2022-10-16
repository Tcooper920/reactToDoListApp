import React, { useState } from "react";
import CreateFieldAndButtonContainer from "./CreateFieldAndButtonContainer";
import CreateGroceryListContainer from "./CreateGroceryListContainer";

export default function CreateToDoListApp({toDoItemList, nextId}) {
    const [toDoList, setToDoList] = useState(toDoItemList);
    const [newItemName, setNewItemName] = useState("");
  
    return (
      <div>
        <CreateFieldAndButtonContainer 
            newItemName={newItemName} 
            toDoList={toDoList}
            nextId={nextId}
            setToDoList={setToDoList}
            setNewItemName={setNewItemName}
        />
        <CreateGroceryListContainer
            toDoList={toDoList}
            setToDoList={setToDoList}
        />
      </div>
    );
  }