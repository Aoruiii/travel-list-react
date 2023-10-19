export default function Stats({ itemList }) {
  if (!itemList.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </footer>
    );

  const itemNum = itemList.length;
  const packedNum = itemList.filter((item) => item.packed === true).length;
  const packedPercent = Math.round((packedNum / itemNum) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You got everything! Ready to go ✈️"
          : ` 🧳 You have ${itemNum} items on your list, and you already packed 
        ${packedNum} (${packedPercent}%)`}
      </em>
    </footer>
  );
}
