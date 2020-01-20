import React from 'react'

const MoneyTableRow = ({ label, value, unit }) => {
  return (
    <tr>
      <td>{label}</td>
      <td className="text-right">{value + unit}</td>
      <td><i className="push-shadow float-right text-primary fas fa-edit"></i></td>
    </tr>
  )
}

export default MoneyTableRow
