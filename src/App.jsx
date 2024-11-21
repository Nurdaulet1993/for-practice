import './App.css'
import Header from "./components/Header.jsx";
import Steps from "./components/Steps.jsx";
import {useEffect, useState} from "react";

function App() {
  const menu = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Admin', path: '/admin' },
  ]
  const [isOpen, setIsOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, setSteps] = useState([
    {
      id: 1,
      active: false
    },
    {
      id: 2,
      active: false
    },
    {
      id: 3,
      active: false
    }
  ]);

  useEffect(() => {
    setSteps(prevState => {
      return prevState.map(step => ({
        ...step,
        active: currentStep >= step.id
      }))
    })

  }, [currentStep]);


  const onNext = () => {
    if (currentStep === steps.length) return;
    setCurrentStep((prevStep) => prevStep + 1);
  }
  const onPrevious = () => {
    if (currentStep === 1) return;
    setCurrentStep(prevStep => prevStep - 1);
  }

  function toggleSteps() {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      <Header title='My application 123' menu={menu}/>
      <div className="container mx-auto p-4">
        <button className="bg-indigo-700 text-white py-2 px-5 rounded" onClick={toggleSteps}>
          { isOpen? 'Hide steps' : 'Show steps' }
        </button>
      </div>
      {isOpen && (
        <div className="container mx-auto px-4">
          <Steps steps={steps} current={currentStep}/>
          <p className="p-4 bg-gray-300 rounded mb-5">Current step: {currentStep}</p>
          <button className="bg-indigo-700 text-white py-2 px-5 rounded me-2" onClick={onPrevious}>Previous</button>
          <button className="bg-indigo-700 text-white py-2 px-5 rounded" onClick={onNext}>Next</button>
        </div>
      )}
    </>
  )
}

export default App
