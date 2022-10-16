import React, { useState } from "react";

export default function CreateFieldAndButtonContainer({
  newItemName,
  toDoList,
  nextId,
  setToDoList,
  setNewItemName,
}) {
  function HandleAddItem() {
    const nextListItem = [...toDoList, { id: nextId++, itemName: newItemName }];
    setToDoList(nextListItem);
    setNewItemName("");
  }

  return (
    <div>
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <input type="submit" value="Add Item" onClick={HandleAddItem} />
    </div>
  );
}
