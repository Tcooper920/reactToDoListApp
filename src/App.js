import "./App.css";
import React, { useState } from "react";
import CreateToDoListApp from "./CreateToDoListApp";

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

export default function App() {
  return (
    <div id="my-app">
      <CreateToDoListApp 
        toDoItemList={toDoItemList} 
        nextId={nextId}
      />
    </div>
  );
}