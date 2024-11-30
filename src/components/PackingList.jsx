import Item from "./Item.jsx";
import { useState } from "react";

export default function PackingList({ items, onDeleteItem, onTogglePack, onClearList }) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = [...items];

  if (sortBy === 'description') {
    sortedItems = [...items].sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === 'packed') {
    sortedItems = [...items].sort((a, b) => a.packed - b.packed);
  }



  return (
    <>
      <div className="container p-4 mx-auto">

        <ul className="flex gap-4 flex-wrap mb-2">
          {
            sortedItems.map((item) => (<Item key={item.id} item={item} onDeleteItem={onDeleteItem} onTogglePack={onTogglePack}/>))
          }
        </ul>

        <div className="p-4 border flex items-center">
          <select className="border border-gray-300 p-2 rounded-md me-2" value={sortBy} onChange={ e => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort packed status</option>
          </select>

          <button className="text-white bg-blue-600 py-2 px-4 rounded" onClick={onClearList}>Clear list</button>
        </div>

      </div>
    </>
  )
}
