import React, { useRef, useEffect } from 'react'

const Textarea = ({ input, label }) => {
  const name = input.name

  const textareaRef = useRef(null)

  useEffect(() => {
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
        rows="1"
        ref={textareaRef}
        className="form-control"
      />
    </div>
  )
}

export default Textarea
