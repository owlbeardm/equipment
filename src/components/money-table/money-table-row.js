import React from 'react'

const MoneyTableRow = ({ label, value, unit }) => {
  return (
    <tr>
      <td>{label}</td>
      <td className="align-right">{value + unit}</td>
      <td><i className="fas fa-edit"></i></td>
      <td><i className="fas fa-trash"></i></td>
    </tr>
  )
}

export default MoneyTableRow
