import React from 'react'
import PropTypes from 'prop-types'

/**
 * @component A checkbox form field to use within Redux-form
 * @param {object} input Prop that connects a component to the Redux
 * @param {string} label The label of the checkbox
 * @param {bool} disabled Disables the checkbox
 * @returns React Component
*/
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

Checkbox.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string
  }),
  label: PropTypes.string,
  disabled: PropTypes.bool
}
