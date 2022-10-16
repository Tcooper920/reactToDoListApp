import React, { useState } from "react";

export default function CreateFieldAndButtonContainer({
  newItemName,
  toDoList,
  setToDoList,
  setNewItemName,
}) {
  const [fieldError, setFieldErrorStyling] = useState("no-field-error-styling");

  function HandleAddItem() {
    if (newItemName.trim() === "") {
      setFieldErrorStyling("field-error-styling");
    } else {
      setFieldErrorStyling("no-field-error-styling");
      const nextListItem = [
        ...toDoList,
        { id: toDoList.length + 1, itemName: newItemName },
      ];
      setToDoList(nextListItem);
      setNewItemName("");
    }
  }

  return (
    <div className="form">
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        className={fieldError}
      />
      <input type="submit" value="Add Item" onClick={HandleAddItem} />
    </div>
  );
}
