import Item from "./Item.jsx";

export default function PackingList({ items }) {
  return (
    <>
      <div className="container p-4 mx-auto">
        <ul className="flex gap-4 flex-wrap">
          {
            items.map((item) => (<Item key={item.id} item={item}/>))
          }
        </ul>
      </div>
    </>
  )
}
