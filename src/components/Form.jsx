import { useState } from "react";

export default function Form({ addItem }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault(); // Prevent form submission for form to refresh the page
    if (!description || quantity < 1) return;

    // Add new item to the list
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    }
    addItem(newItem);

    // Reset form fields after submission
    setDescription('');
    setQuantity(1);
    console.log('New item added:', newItem);
  }

  return (
    <>
      <form className="container mx-auto p-4 grid grid-cols-[max-content_1fr_max-content_max-content] items-center gap-2"
            onSubmit={handleSubmit}
      >
        <h3>What do you need for your trip?</h3>
        <input type="text"
               placeholder="Type your item here"
               className="border rounded py-2 px-4"
               value={description}
               onChange={(e) => setDescription(e.target.value)}
        />
        <select className="border rounded py-2 px-4"
                value={quantity}
                onChange={ event => setQuantity(+event.target.value) }
        >
          { Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
            <option key={num} value={num}>{num}</option>
          )) }
        </select>
        <button type="submit" className="text-white bg-blue-600 py-2 px-4 rounded">Add Item</button>
      </form>
    </>
  )
}
