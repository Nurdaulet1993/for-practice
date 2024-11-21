import { useState } from "react";
import Form from "../components/Form.jsx";
import PackingList from "../components/PackingList.jsx";
import Stats from "../components/Stats.jsx";

export default function FarAway() {
  const [items, setItems] = useState([
    {
      id: 1,
      description: 'Item 1',
      quantity: 1,
      packed: false
    },
    {
      id: 2,
      description: 'Item 2',
      quantity: 2,
      packed: true
    },
    {
      id: 3,
      description: 'Item 3',
      quantity: 3,
      packed: false
    },
    {
      id: 4,
      description: 'Item 4',
      quantity: 4,
      packed: false
    }
  ]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  }

  return (
    <>
      <Form addItem={handleAddItem}/>
      <PackingList items={items}/>
      <Stats/>
    </>
  )
}
