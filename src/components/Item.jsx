import "./Item.css"
export default function Item({ item }) {
  return (
    <li className={ item.packed ? 'item border-red-600' : 'item'}>
      <p>ID { item.id }</p>
      <p>Description: { item.description }</p>
      <p>Quantity: { item.quantity }</p>
      <button className="text-white bg-red-600 py-2 px-4 rounded ">Remove</button>
    </li>
  )
}
