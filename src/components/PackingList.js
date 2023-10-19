import Item from "./Item";
import { useState } from "react";

export default function PackingList({
  itemList,
  onDeleteItem,
  handleToggleItem,
  clearItem,
}) {
  const [sortBy, setSortBy] = useState("input");

  // function sortItems(event) {
  //   const sortType = event.target.value;
  //   console.log(sortType);
  //   setSort((sort) => sortType);
  //   handleSort(sortType);
  // }
  let sortItems;

  if (sortBy === "input") sortItems = itemList;
  if (sortBy === "description")
    sortItems = itemList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortItems = itemList.slice().sort((a, b) => a.packed - b.packed);

  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={clearItem}>Clear List</button>
      </div>
    </div>
  );
}
