import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context'
import errIcon from '../img/erroricon.png'

function NameDOB() {
  const { getName, toValidate } = useGlobalContext()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dob, setDob] = useState('')
  const [age, setAge] = useState(null)


  // const [firstName, setFirstName] = useState('')


  // function handleInputChange(event) {
  //   setDob(event.target.value)
  // }

  function handleChangeDOB(e) {
    console.log('handleChangeDOB',e.target.validity.valid);
  }

  function _calculateAge(birthday) {
    var today = new Date();
    var birthDate = new Date(birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }
  useEffect(() => {
    getName({firstName, lastName,dob})
  }, [firstName,lastName,dob])

  useEffect(() => {
    
    if (_calculateAge(dob)>=18) {
      setAge(_calculateAge(dob))
    }
  }, [dob])
  


  return (
    <>
      <h1 className="text-23 text-700">Name & Date of Birth</h1>
      <p className="text-15 text-400 mb-4">Please use your legal name as it appears on your ID.</p>
      <div className="row mb-3">

        <div className="col-6">
          <label>
            <span className="text-16">First Name</span>
          </label>
          <input
            type="text"
            onChange={(e)=> setFirstName(e.target.value)}
            placeholder="John"
            value={firstName}
          />
        </div>

        <div className="col-6">
          <label>
            <span className="text-16">Last Name</span>
          </label>
          <input
            type="text"
            onChange={(e)=> setLastName(e.target.value)}
            placeholder="Doe"
            value={lastName}
          />
        </div>

      </div>

      <div className="row">
        <div className="col-12">
          <label>
            <div className="d-flex justify-content-between">
            <div className="text-16">
              Date of Birth
              </div>
              <div style={{opacity: age >= 18 ? '0': '1'}}>
                <img src={errIcon} alt="errIcon" width="17"/>
              </div>

            </div>
              
          </label>
          <input
            type="date"
            onChange={(e)=>setDob(e.target.value)}
            placeholder="mm/dd/yyyy"
            value={dob}
            onKeyUp={handleChangeDOB}
          />
          <p>You must be over 18 years old.</p>
        </div>
      </div>

    </>
  )
}

export default NameDOB