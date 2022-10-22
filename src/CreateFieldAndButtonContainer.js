import React, { useState, useEffect } from "react";

export default function CreateFieldAndButtonContainer({
  newItemName,
  toDoList,
  setToDoList,
  setNewItemName,
}) {
  const [fieldError, setFieldErrorStyling] = useState("no-field-error-styling");
  const [itemIdCounter, setItemIdCounter] = useState(0);

  // Get stored item ID counter value...
  useEffect(() => {
    const getStoredIdCounterValue = JSON.parse(
      localStorage.getItem("stored-id-counter-value")
    );
    if (getStoredIdCounterValue) {
      setItemIdCounter(getStoredIdCounterValue);
    }
  }, []);

  // Store current item ID counter value...
  useEffect(() => {
    localStorage.setItem(
      "stored-id-counter-value",
      JSON.stringify(itemIdCounter)
    );
  }, [itemIdCounter]);

  function HandleAddItem() {
    if (newItemName.trim() === "") {
      setFieldErrorStyling("field-error-styling");
    } else {
      setItemIdCounter(itemIdCounter + 1);
      setFieldErrorStyling("no-field-error-styling");
      const nextListItem = [
        ...toDoList,
        { id: itemIdCounter, itemName: newItemName },
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
