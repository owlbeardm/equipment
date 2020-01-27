import React, { useState } from 'react'

const Input = ({ name, validation = 'unchecked' }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const feedback = {
    valid: {
      icon: <i className="material-icons ">done</i>,
      style: 'has-success'
    },
    invalid: {
      icon: <i className="material-icons ">clear</i>,
      style: 'has-danger'
    },
    unchecked: {
      icon: null,
      style: null
    }
  }

  return (
    <div className={`form-group bmd-form-group ${feedback[validation].style}`}>
      <label className="control-label bmd-label-static" htmlFor={name}>{name}</label>

      <input
        id={name}
        name={name}
        type="text"
        className="form-control"
        value={inputValue}
        onChange={handleChange}
      />

      <span className="form-control-feedback">
        {feedback[validation].icon}
      </span>
    </div>
  )
}

export default Input
