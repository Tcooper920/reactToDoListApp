import CreateSingleItem from "./CreateSingleItem";

export default function CreateItemListContainer({ toDoList, setToDoList }) {
  return (
    <ul className="grocery-list">
      {toDoList.map((listItem, index) => {
        return (
          <CreateSingleItem
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
