import React from 'react'
import PropTypes from 'prop-types'
import './inventory-error.scss'

const InventoryError = ({ errorMsg }) => {
  return (
    <div className="inventory-error card" data-test="component-inventory-error">
      <div>
        <div className="warning-icon">
          <i className="fas fa-shopping-bag"></i>
        </div>
        <div className="warning-text align-items-md-start">
          <div className="first-line">
            OOPS!
          </div>
          <div data-test="error-msg">{errorMsg}</div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default InventoryError

InventoryError.propTypes = {
  errorMsg: PropTypes.string.isRequired
}
