import React from 'react'

const Radio = (props) => {
  const { input, label, value } = props

  return (
    <div className="form-check form-check-radio">
      <label className="form-check-label text-dark">
        <input
          {...input}
          id={value}
          value={value}
          type="radio"
          checked={input.value === value}
          className="form-check-input"
        />

        {label}

        <span className="circle">
          <span className="check"></span>
        </span>
      </label>
    </div>
  )
}

export default Radio
