import React from 'react'

const Checkbox = ({ label }) => {
  return (
    <div className="form-group">
      <div className="form-check">
        <label className="form-check-label text-dark">
          <input
            type="checkbox"
            className="form-check-input"
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
