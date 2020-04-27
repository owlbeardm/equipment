import React from 'react'

const Textarea = ({ input, label }) => {
  const name = input.name

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
        className="form-control"
      />
    </div>
  )
}

export default Textarea
