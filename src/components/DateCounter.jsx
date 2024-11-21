import { useState } from "react";

export default function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);

  const incrementCount = () => {
    setCount(prevCount => prevCount + step);
  }
  const decrementCount = () => {
    setCount(prevCount => prevCount - step);
  }

  const incrementStep = () => {
    setStep(prevCount => prevCount + 1);
  }
  const decrementStep = () => {
    setStep(prevCount => prevCount - 1);
  }

  return (
    <>
      <div className="container mx-auto border rounded">
        <div className="p-4">
          <div className="flex gap-5 items-center">
            <button className="bg-indigo-700 text-white py-2 px-5 rounded" onClick={decrementStep}>
              -
            </button>
            <div className="text-indigo-800">{step}</div>
            <button className="bg-indigo-700 text-white py-2 px-5 rounded" onClick={incrementStep}>
              +
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="flex gap-5 items-center">
            <button className="bg-indigo-700 text-white py-2 px-5 rounded" onClick={decrementCount}>
              -
            </button>
            <div className="text-indigo-800">{count}</div>
            <button className="bg-indigo-700 text-white py-2 px-5 rounded" onClick={incrementCount}>
              +
            </button>
          </div>
        </div>
        <div className="p-4">

          {/*{*/}
          {/*  count > 0 ? `${count} days from today is` : `${Math.abs(count)} days ago is`*/}
          {/*}*/}
        </div>
        <div className="p-4">{ count === 0 && 'Today is' } { date.toDateString() }</div>
      </div>

    </>

  )
}
