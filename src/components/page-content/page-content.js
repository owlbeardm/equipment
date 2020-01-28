import React, { useState } from 'react'
import './page-content.css'
import ControlsPanel from '../controls-panel/controls-panel'
import MoneyTable from '../money-table/money-table'
import EquipmentTable from '../equipment-table/equipment-table'
import ItemAddingPanel from '../item-adding-panel'
import Checkbox from '../checkbox'

const PageContent = () => {
  const [adding, setAdding] = useState(false)

  const onAdding = () => {
    setAdding(true)
  }

  const onAddingSubmit = () => {
    console.log('adding is successfully done')
    setAdding(false)
  }

  const onAddingCancel = () => {
    console.log('adding was skipped =(')
    setAdding(false)
  }

  let content

  if (adding) {
    content = <ItemAddingPanel
      onAddingSubmit={onAddingSubmit}
      onAddingCancel={onAddingCancel}
    />
  } else {
    content = (
      <div className="card-body">
        <ControlsPanel onAdding={onAdding} />
        <MoneyTable />
        <EquipmentTable />
      </div>
    )
  }

  return (
    <div className="page-content card">
      {content}
    </div>
  )
}

export default PageContent
