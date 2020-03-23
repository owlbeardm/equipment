import React from 'react'

const EquipmentRow = (props) => {
  const { id, name, cost, weight, onRemove } = props
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
        <a href="#" onClick={() => onRemove(id)} >
          <i className="push-shadow text-danger fas fa-trash"></i>
        </a>
      </div>
    </div>
  )
}

export default EquipmentRow
