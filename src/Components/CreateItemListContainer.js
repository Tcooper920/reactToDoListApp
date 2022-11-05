import React, { useState, useEffect } from "react";
import CreateSingleItem from "./CreateSingleItem";

export default function CreateItemListContainer({ toDoList, setToDoList }) {
  const [toggleCrossOut, setToggleCrossOut] = useState({});

  function toggleCrossOutFunction(id) {
    setToggleCrossOut({
      ...toggleCrossOut,
      [id]: !toggleCrossOut[id],
    });
  }

  // Get stored crossed out item styles...
  useEffect(() => {
    const getStoredCrossedOutStyles = JSON.parse(
      localStorage.getItem("stored-crossed-out-styles")
    );
    if (getStoredCrossedOutStyles) {
      setToggleCrossOut(getStoredCrossedOutStyles);
    }
  }, []);

  return (
    <ul className="grocery-list">
      {toDoList.map((listItem, index) => {
        return (
          <CreateSingleItem
            toggleCrossOutFunction={toggleCrossOutFunction}
            toggleCrossOut={toggleCrossOut}
            listItem={listItem}
            index={index}
            toDoList={toDoList}
            setToDoList={setToDoList}
            key={listItem + index}
          />
        );
      })}
    </ul>
  );
}
