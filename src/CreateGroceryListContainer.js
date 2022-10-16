import React, { useState } from "react";

export default function CreateGroceryListContainer({ toDoList, setToDoList }) {
  return (
    <ul className="grocery-list">
      {toDoList.map((listItem, index) => {
        return (
          <li key={index} id={listItem.id} className="grocery-list-item">
            {listItem.itemName}
            <button
              onClick={() =>
                setToDoList(toDoList.filter((item) => item.id !== listItem.id))
              }
            >
              &#x2716;
            </button>
          </li>
        );
      })}
    </ul>
  );
}
