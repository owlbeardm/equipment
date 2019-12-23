import React from 'react'
import './page-content.css'
import ControlsPanel from '../controls-panel/controls-panel'
import MoneyTable from '../money-table/money-table'
import EquipmentTable from '../equipment-table/equipment-table'

const PageContent = () => {
  return (
    <div className="page-content card">
      <div className="card-body">
        <ControlsPanel />
        <MoneyTable />
        <EquipmentTable />
      </div>
    </div>
  )
}

export default PageContent
