import "./Item.css"
export default function Item({ item, onDeleteItem, onTogglePack }) {
  return (
    <li className={ item.packed ? 'item border-red-600' : 'item'}>
      <input type="checkbox" checked={item.packed} onChange={() => { onTogglePack(item.id) }}/>
      <p>ID { item.id }</p>
      <p>Description: { item.description }</p>
      <p>Quantity: { item.quantity }</p>
      <button onClick={ () => onDeleteItem(item.id) }
              className="text-white bg-red-600 py-2 px-4 rounded"
      >
        Remove
      </button>
    </li>
  )
}
