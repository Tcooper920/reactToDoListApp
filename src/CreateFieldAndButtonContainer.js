import React, { useState } from "react";

export default function CreateFieldAndButtonContainer({
  newItemName,
  toDoList,
  setToDoList,
  setNewItemName,
}) {
  function HandleAddItem() {
    const nextListItem = [...toDoList, { id: toDoList.length + 1, itemName: newItemName }];
    setToDoList(nextListItem);
    setNewItemName("");
  }

  return (
    <div className="form">
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <input type="submit" value="Add Item" onClick={HandleAddItem} />
    </div>
  );
}
