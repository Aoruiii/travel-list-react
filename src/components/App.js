import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import "../index.css";
import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function App() {
  const [itemList, setItemList] = useState([]);

  function onAddItem(newItem) {
    setItemList((itemList) => [...itemList, newItem]);
  }

  function onDeleteItem(id) {
    setItemList((itemList) => itemList.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItemList((itemList) =>
      itemList.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearItem() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    confirmed && setItemList([]);
  }

  // function handleSort(sort) {
  //   if (sort === "input") {
  //     setItemList((itemList) => itemList.slice().sort((a, b) => a.id - b.id));
  //   } else if (sort === "description") {
  //     setItemList((itemList) =>
  //       itemList
  //         .slice()
  //         .sort((a, b) => a.description.localeCompare(b.description))
  //     );
  //   } else if (sort === "packed") {
  //     setItemList((itemList) =>
  //       itemList.slice().sort((a, b) => a.packed - b.packed)
  //     );
  //   }
  // }

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={onAddItem} />
      <PackingList
        itemList={itemList}
        onDeleteItem={onDeleteItem}
        handleToggleItem={handleToggleItem}
        clearItem={clearItem}
        // handleSort={handleSort}
      />
      <Stats itemList={itemList} />
    </div>
  );
}
