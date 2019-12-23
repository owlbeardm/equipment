import React from 'react'

const EquipmentTableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        {/* <th>Slot</th> */}
        <th>Value</th>
        <th>Weight</th>
        <th className="align-right"></th>
        <th className="align-right"></th>
      </tr>
    </thead>
  )
}

export default EquipmentTableHeader
