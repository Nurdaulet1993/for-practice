import Step from "./Step.jsx";

export default function Steps({ steps, current }) {
  return (
    <div className="flex justify-between py-4">
      {steps.map((step, index) => (
        <Step key={index} step={step} current={current}/>
      ))}
    </div>
  )
}
