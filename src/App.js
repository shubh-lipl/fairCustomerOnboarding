import React, { useEffect, useState } from 'react';
import './index.css';
import ProgressBar from './components/ProgressBar'
import NameDOB from './components/NameDOB'
import { useGlobalContext } from './context'
import backbtn from './img/backbutton.png';
import fairlogo from './img/FairLogo.png';


function App() {
  const { isValid1 } = useGlobalContext()

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

        <div className="text-center mt-3"><img src={fairlogo} alt="fairlogo"/></div>
        
        <div className="position-relative">
        <button className="backBtn p-0 bg-transparent border-0" style={{opacity: step===0 ? 0 : 1}} disabled={step === 0} onClick={prev}>
          <img src={backbtn} alt="backbutton"/>
        </button>
        <ProgressBar progress={progress} />
        </div>

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

        <button className="text-20 text-40 next mt-4" disabled={!isValid1} onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default App;
