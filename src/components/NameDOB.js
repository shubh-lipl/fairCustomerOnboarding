import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context'

function NameDOB() {
  const { getName, toValidate } = useGlobalContext()
  const [name, setName] = useState('')

  function handleInputChange(event) {
    setName(event.target.value)
  }

  useEffect(() => {
    getName(name)
  },[name])
  
  return (
    <>
        <h1 className="text-23 text-700">Name & Date of Birth</h1>

      <input
        type="text"
        onChange={handleInputChange} />
    </>
  )
}

export default NameDOB