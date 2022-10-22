import { useState, useEffect } from "react";

export default function CreateSingleItem({
  listItem,
  index,
  toDoList,
  setToDoList,
  toggleCrossOutFunction,
  toggleCrossOut,
}) {
  // Store current todo list in local storage...
  useEffect(() => {
    localStorage.setItem("get-stored-todo-list", JSON.stringify(toDoList));
  }, [toDoList]);

  const [fadeOutStyle, setFadeOutStyle] = useState();

  return (
    <>
      <li
        key={listItem.itemName + index}
        id={index}
        className={`grocery-list-item ${fadeOutStyle}`}
      >
        <span
          className={toggleCrossOut[listItem.id] ? "cross-out-item" : ""}
          onClick={() => toggleCrossOutFunction(listItem.id)}
        >
          {listItem.itemName}
        </span>
        <button
          onClick={() => {
            setFadeOutStyle("fade-out");
            setTimeout(() => {
              setFadeOutStyle("");
              setToDoList(toDoList.filter((item) => item.id !== listItem.id));
            }, "500");
          }}
          className="delete-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
        {console.log(toDoList)}
      </li>
    </>
  );
}
