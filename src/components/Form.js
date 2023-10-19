import { useState } from "react";

export default function Form({ onAddItem }) {
  const [inputText, setInputText] = useState("");
  const [select, setSelect] = useState(1);

  function handleSubmit(event) {
    const newItem = {
      id: new Date(),
      description: event.target.item.value,
      quantity: Number(event.target.quantity.value),
      packed: false,
    };
    onAddItem(newItem);
    event.preventDefault();
    setInputText("");
    setSelect(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your trip?</h3>
      <select
        name="quantity"
        value={select}
        onChange={(event) => setSelect(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="text"
        onChange={(event) => setInputText(event.target.value)}
        placeholder="item..."
        name="item"
        value={inputText}
      />
      <button type="submit">Add</button>
    </form>
  );
}
