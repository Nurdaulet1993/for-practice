export default function StepMessage({ step, children }) {
  return (
    <div className="p-4 bg-gray-300 rounded">
      <div className="flex gap-5 items-center">
        <div className="text-indigo-800">Step {step}:</div>
        {children}
      </div>
    </div>
  )
}
