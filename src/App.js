import "./App.css";
import React, { useState } from "react";
import CreateToDoListApp from "./CreateToDoListApp";

const toDoItemList = [];

export default function App() {
  return (
    <div id="my-app">
      <CreateToDoListApp toDoItemList={toDoItemList} />
    </div>
  );
}
