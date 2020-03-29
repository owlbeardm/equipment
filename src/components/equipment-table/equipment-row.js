import React from 'react'

import './equipment-table.css'

const EquipmentRow = (props) => {
  const { id, name, costInGp, weight, weightRadio, onRemove, onEdit } = props

  let weightValue = weightRadio

  if (weightValue === 'bulk') {
    switch (weight) {
      case 1:
        weightValue = '1\xa0bulk'
        break
      default:
        weightValue = weight + '\xa0bulks'
    }
  }

  return (
    <div className="flex-row" key={id}>
      <div className="flex-cell first">
        {name}
      </div>
      <div className="flex-cell">{costInGp} gp</div>
      <div className="flex-cell fixed-width basis-3 text-center">{weightValue}</div>
      <div className="flex-cell fixed-width basis-1">
        <button className="link-button" onClick={() => onEdit(id)} >
          <i className="push-shadow text-primary fas fa-edit"></i>
        </button>
      </div>
      <div className="flex-cell fixed-width basis-1">
        <button className="link-button" onClick={() => onRemove(id)} >
          <i className="push-shadow text-danger fas fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default EquipmentRow
