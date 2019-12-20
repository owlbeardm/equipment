import React from 'react'

const EquipmentTableRow = ({ name, slot, value, weight }) => {
  return (
    <tr>
      <td>{name}</td>
      {/* <td>{slot}</td> */}
      <td>{value}</td>
      <td>{weight}</td>
      <td><i className="fas fa-edit"></i></td>
      <td><i className="fas fa-trash"></i></td>
    </tr>
  )
}

export default EquipmentTableRow
