import React from 'react'
import PropTypes from 'prop-types'

/**
 * @component A single radio option to use with Radio-Group
 * @param {object} input Prop that connects a component to the Redux
 * @param {string} label The label of the radio option
 * @param {string} value Key of the radio option
 * @returns React Component
*/
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

Radio.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string
  }),
  label: PropTypes.string,
  value: PropTypes.string
}
