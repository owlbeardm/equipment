import React from 'react'
import PropTypes from 'prop-types'
import Radio from './radio'

/**
 * @component A Radiobutton group to use within Redux-form
 * @param {object} input Prop that connects a component to the Redux
 * @param {array} children The list of Radiobutton group options
 * @returns React Component
 */
const RadioGroup = (props) => {
  const { input, children } = props

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { input: input })
  )

  return (
    <div className="form-group">
      {childrenWithProps}
    </div>
  )
}

export default RadioGroup

RadioGroup.propTypes = {
  input: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(Radio))
  ]).isRequired
}
