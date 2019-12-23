import React from 'react'

const EquipmentTableRow = ({ name, slot, value, weight }) => {
  return (
    <tr>
      <td>{name}</td>
      {/* <td>{slot}</td> */}
      <td>{value}</td>
      <td>{weight}</td>
      <td><i className="push-shadow float-right text-primary fas fa-edit"></i></td>
      <td><i className="push-shadow text-danger fas fa-trash"></i></td>
    </tr>
  )
}

export default EquipmentTableRow
