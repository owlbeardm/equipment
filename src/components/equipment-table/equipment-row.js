import React from 'react'

const EquipmentRow = (props) => {
  const { id, name, slot, cost, weight } = props
  return (
    <div className="flex-row" key={id}>
      <div className="flex-cell first">
        {name}
      </div>
      <div className="flex-cell">{cost}</div>
      <div className="flex-cell fixed-width basis-3 text-center">{weight}</div>
      <div className="flex-cell fixed-width basis-1">
        <i className="push-shadow text-primary fas fa-edit"></i>
      </div>
      <div className="flex-cell fixed-width basis-1">
        <i className="push-shadow text-danger fas fa-trash"></i>
      </div>
    </div>
  )
}

export default EquipmentRow