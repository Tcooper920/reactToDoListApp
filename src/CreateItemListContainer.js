import CreateSingleItem from "./CreateSingleItem";
import React, { useState } from "react";

export default function CreateItemListContainer({ toDoList, setToDoList }) {
  const [toggleCrossOut, setToggleCrossOut] = React.useState({});

  function toggleCrossOutFunction(id) {
    setToggleCrossOut({
      ...toggleCrossOut,
      [id]: !toggleCrossOut[id],
    });
  }

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
