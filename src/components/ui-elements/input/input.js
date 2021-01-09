import React from 'react'
import PropTypes from 'prop-types'

/**
 * @component An input form field to use within Redux-form
 * @param {object} input Prop that connects a component to the Redux
 * @param {string} type Type of the html input tag
 * @param {string} label The label of the checkbox
 * @param {bool} disabled Disables the checkbox
 * @param {object} meta Metadata about the state of this field that redux-form is tracking
 * @returns React Component
*/

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
        data-test="input-node"
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
        data-test="error-message"
      >{error}</label>}

    </div>
  )
}

export default Input

Input.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string
  }),
  type: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    pristine: PropTypes.bool,
    valid: PropTypes.bool,
    invalid: PropTypes.bool,
    error: PropTypes.string
  })
}
