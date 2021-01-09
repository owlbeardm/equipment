import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const Textarea = ({ input, label }) => {
  const name = input.name

  const textareaRef = useRef(null)

  React.useEffect(() => {
    textareaRef.current.style.height = '0px'
    const scrollHeight = textareaRef.current.scrollHeight
    textareaRef.current.style.setProperty('height', `${scrollHeight}px`, 'important')
  }, [input.value])

  return (
    <div className="form-group bmd-form-group">
      <label
        className="control-label bmd-label-static"
        htmlFor={name}
      >{label}</label>

      <textarea
        {...input}
        id={name}
        data-test='textarea-node'
        rows="1"
        ref={textareaRef}
        className="form-control"
      />
    </div>
  )
}

export default Textarea

Textarea.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  label: PropTypes.string
}
