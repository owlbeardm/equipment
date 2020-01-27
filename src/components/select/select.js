import React from 'react'

const Select = ({ name, options }) => {
  const selectOptions = options.map((option) => (
    <option key={option}>{option}</option>
  ))

  return (
    <div className="form-group bmd-form-group">
      <label
        className="control-label bmd-label-static"
        htmlFor={name}
      >
        {name}
      </label>

      <select className="form-control" id={name}>
        {selectOptions}
      </select>
    </div>
  )
}

export default Select
