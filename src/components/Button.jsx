export default function Button({ onClick, children, className }) {
  return (
    <button className={`bg-indigo-700 text-white py-2 px-5 rounded ${className}`} onClick={onClick}>
      { children }
    </button>
  )
}
