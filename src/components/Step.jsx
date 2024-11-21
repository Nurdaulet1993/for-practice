import "./Step.css"
export default function Step({ step }) {
  return (
    <div className={`${step.active ? 'active step' : 'step'}`}>
      { step.id }
    </div>
  )
}
