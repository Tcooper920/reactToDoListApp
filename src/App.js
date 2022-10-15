import "./App.css";
import React, { useState } from "react";

const toDoItemList = [
  { id: 1, itemName: "Bananas" },
  { id: 2, itemName: "Milk" },
  { id: 3, itemName: "Bread" },
  { id: 4, itemName: "Candy" },
  { id: 5, itemName: "Carrots" },
  { id: 6, itemName: "Red Apples" },
  { id: 7, itemName: "Fish" },
];

let nextId = 8;

function CreateToDoListApp() {
  const [toDoList, setToDoList] = useState(toDoItemList);
  const [newItemName, setNewItemName] = useState("");

  function HandleAddItem() {
    const nextListItem = [...toDoList, { id: nextId++, itemName: newItemName }];
    setToDoList(nextListItem);
    setNewItemName("");
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <input type="submit" value="Add Item" onClick={HandleAddItem} />
      </div>
      <ul className="grocery-list">
        {toDoList.map((listItem, index) => {
          return (
            <li key={index} id={listItem.id} className="grocery-list-item">
              {listItem.itemName}
              <button
                onClick={() =>
                  setToDoList(
                    toDoList.filter((item) => item.id !== listItem.id)
                  )
                }
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div id="myApp">
      <CreateToDoListApp />
    </div>
  );
}

export default App;
