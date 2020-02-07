import React from 'react'

const Checkbox = ({ input, label, disabled }) => {
  const name = input.name

  return (
    <div className="form-group">
      <div className="form-check">
        <label className="form-check-label text-dark">
          <input
            {...input}
            name={name}
            type="checkbox"
            className="form-check-input"
            disabled={disabled}
          />

          {label}

          <span className="form-check-sign">
            <span className="check"></span>
          </span>
        </label>
      </div>
    </div>
  )
}

export default Checkbox
