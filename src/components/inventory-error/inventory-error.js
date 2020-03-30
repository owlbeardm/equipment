import React from 'react'
import './inventory-error.scss'

const InventoryError = () => {
  return (
    <div className="inventory-error card">
      <div>
        <div className="warning-icon">
          <i className="fas fa-shopping-bag"></i>
        </div>
        <div className="warning-text">
          <div className="first-line">
            OOPS!
          </div>
          <div>Seems like your inventory is empty</div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default InventoryError
