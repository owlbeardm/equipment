import React, { useState } from 'react'
import { connect } from 'react-redux'
import './equipment-table.css'

const EquipmentTableHeader = ({ children, sortOrder, setSortingOrder }) => {
  const [listOpen, setListOpen] = useState(false)

  const handleClick = (type) => {
    setSortingOrder(type)
    setListOpen(false)
  }

  const sortDropdown = (
    <div className="dropdown">
      <button
        className="link-button"
        type="button"
        onClick={() => setListOpen(!listOpen)}
      >
        <i className="mb-0 text-dark pl-2 fas fa-sort-amount-down"></i>
      </button>
      <div className={`dropdown-menu dropdown-menu-right ${listOpen && 'show'}`}>
        <button
          className={`dropdown-item ${(sortOrder === 'id') ? 'active' : ''}`}
          type="button"
          onClick={() => handleClick('id')}
        >
          By adding order
        </button>

        <button
          className={`dropdown-item ${(sortOrder === 'name') ? 'active' : ''}`}
          type="button"
          onClick={() => handleClick('name')}
        >
          By name
        </button>

        <button
          className={`dropdown-item ${(sortOrder === 'weight') ? 'active' : ''}`}
          type="button"
          onClick={() => handleClick('weight')}
        >
          By weight
        </button>
      </div>
    </div>
  )

  return (
    <div className="equipment-table-header card card-plain">
      <div className="card-header card-header-primary d-flex">
        <h4 className="mb-0 text-dark flex-grow-1">Equipment</h4>
        {sortDropdown}
      </div>
      {children}
    </div>
  )
}

const mapStateToProps = ({ main: { equipment } }) => {
  return {
    sortOrder: equipment.sortOrder
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSortingOrder: (value) => {
      dispatch({
        type: 'SET_SORTING_ORDER',
        payload: value
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentTableHeader)
