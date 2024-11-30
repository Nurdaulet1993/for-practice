export default function Stats({ items }) {

  if (!items.length) return (
    <footer className="container mx-auto p-4">
      <p>No items found!</p>
    </footer>
  );

  const totalItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="container mx-auto p-4">
    { percentage === 100 && <p>Everything packed</p> }
      You have { totalItems } items on your packing list.
      You have { packedItems } items packed. ({percentage}%)
    </footer>
  )
}
