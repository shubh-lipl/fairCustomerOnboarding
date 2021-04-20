import React, { useEffect, useState } from 'react';
import './index.css';
import ProgressBar from './components/ProgressBar'
import NameDOB from './components/NameDOB'
import { useGlobalContext } from './context'


function App() {
  const { firstName } = useGlobalContext()

  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const steps = [
    <NameDOB />
  ]

  function prev() {
    if (step > 0) {
      setStep(step - 1);
    }
  }
  function next() {
    if (step <= steps.length - 1) {
      setStep(step + 1)
    }
  }

  useEffect(() => {
    // console.log(step);
    setProgress((step / (steps.length) * 100))
  }, [step])

  return (
    <div className="App">
      <div className="container">

        {step === 0 || <button disabled={step === 0} onClick={prev}>prev</button>}

        <ProgressBar progress={progress} />

        {/* <h1 className="text-23 text-700">{steps[step]}</h1> */}
        <div className="steps">
          {
            steps.map((item, i) => {
              return (
                <div key={i} style={{ display: step === i ? 'block' : 'none' }} className={'item' + step, 'step'}>{item}</div>
              )
            })
          }
        </div>

        {/* <NameDOB /> */}

        <button className="text-20 text-40 next" disabled={firstName===''} onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default App;
