import "./App.css";
import CreateToDoListApp from "./CreateToDoListApp";

const toDoItemList = [];

export default function App() {
  return (
    <div id="my-app">
      <CreateToDoListApp toDoItemList={toDoItemList} />
    </div>
  );
}
