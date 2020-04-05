import React from 'react'
import './inventory-error.scss'

const InventoryError = ({ errorMsg }) => {
  return (
    <div className="inventory-error card">
      <div>
        <div className="warning-icon">
          <i className="fas fa-shopping-bag"></i>
        </div>
        <div className="warning-text align-items-md-start">
          <div className="first-line">
            OOPS!
          </div>
          <div>{errorMsg}</div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default InventoryError
