import React from 'react'

const Select = ({ input, label, options }) => {
  const name = input.name

  const selectOptions = options.map((option) => (
    <option key={option}>{option}</option>
  ))

  return (
    <div className="form-group bmd-form-group">
      <label
        className="control-label bmd-label-static"
        htmlFor={name}
      >{label}</label>

      <select
        {...input}
        id={name}
        className="form-control"
      >
        <option key={'_empty'}>{''}</option>
        {selectOptions}
      </select>

    </div>
  )
}

export default Select
