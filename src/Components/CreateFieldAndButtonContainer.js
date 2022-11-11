import React, { useState, useEffect } from "react";
import CreateToastNotification from "./CreateToastNotification";

export default function CreateFieldAndButtonContainer({
  newItemName,
  toDoList,
  setToDoList,
  setNewItemName,
}) {
  const [fieldError, setFieldErrorStyling] = useState("no-field-error-styling");
  const [toastError, setToastErrorStyling] = useState("");
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

  function handleAddItem() {
    if (newItemName.trim() === "") {
      setFieldErrorStyling("field-error-styling");
      setToastErrorStyling("show-toast");
    } else {
      setItemIdCounter(itemIdCounter + 1);
      setFieldErrorStyling("no-field-error-styling");
      setToastErrorStyling("");
      const nextListItem = [
        ...toDoList,
        { id: itemIdCounter, itemName: newItemName },
      ];
      setToDoList(nextListItem);
      setNewItemName("");
    }
  }

  function alphabeticalSort() {
    const alphabeticallySortedList = toDoList.sort((a, b) => {
      const itemA = a.itemName.toUpperCase();
      const itemB = b.itemName.toUpperCase();

      return (itemA < itemB) ? -1 : (itemA > itemB) ? 1 : 0;
    });
    setToDoList([].concat(alphabeticallySortedList));
  }

  return (
    <>
      <CreateToastNotification toastText={"Please Enter an Item."} toastErrorStyling={toastError} />
      <div className="form">
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          className={fieldError}
        />
        <input type="submit" value="Add Item" className="add-item-btn" onClick={handleAddItem} />
        <input type="submit" value="Aa Sort" className="alphabetical-sort-btn" onClick={alphabeticalSort} />
      </div>
    </>
  );
}
