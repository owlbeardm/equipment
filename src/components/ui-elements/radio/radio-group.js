import React from 'react'

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
