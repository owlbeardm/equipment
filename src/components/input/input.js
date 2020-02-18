import React from 'react'

const Input = ({ input, type, label, disabled, meta: { touched, pristine, valid, invalid, error } }) => {
  const name = input.name

  const validClass = touched && !pristine && valid ? 'has-success' : ''
  const invalidClass = touched && invalid ? 'has-danger' : ''

  return (
    <div className={`form-group bmd-form-group ${validClass} ${invalidClass}`}>
      <label
        className="control-label bmd-label-static"
        htmlFor={name}
      >{label}</label>

      <input
        {...input}
        id={name}
        type={type}
        className="form-control"
        disabled={disabled}
      />

      {touched && <span className="form-control-feedback">
        <i className="material-icons ">
          {valid && 'done'}
          {invalid && 'clear'}
        </i>
      </span>}

      {touched && invalid && <label
        className="error"
        htmlFor={name}
      >{error}</label>}

    </div>
  )
}

export default Input
