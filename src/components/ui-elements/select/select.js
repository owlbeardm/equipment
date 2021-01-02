import React from 'react'
import PropTypes from 'prop-types'

/**
 * @component A select form field to use within Redux-form
 * @param {object} input Prop that connects a component to the Redux
 * @param {string} label The label of the select field
 * @param {array of strings} options Options of the dropdown list
 * @returns React Component
*/

const Select = ({ input, label, options }) => {
  const name = input.name

  const selectOptions = options.map((option) => (
    <option key={option} data-test='option'>{option}</option>
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
        <option key='_empty' data-test='option'>{''}</option>
        {selectOptions}
      </select>

    </div>
  )
}

export default Select

Select.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string
  }),
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string)
}
