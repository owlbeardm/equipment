import React, { useState } from 'react'
import './page-content.css'
import ControlsPanel from '../controls-panel/controls-panel'
import MoneyTable from '../money-table/money-table'
import EquipmentTable from '../equipment-table/equipment-table'
import ItemAddingPanel from '../item-adding-panel'
import { connect } from 'react-redux'

const PageContent = ({ itemAddToList }) => {
  const [adding, setAdding] = useState(false)

  const onAdding = () => {
    setAdding(true)
  }

  const onAddingSubmit = (value) => {
    console.log('adding is successfully done')

    const weight = value.light ? 'light'
      : value.negligible ? 'negligible'
        : value.weight ? value.weight + '\xa0bulk' : ''

    const cost = value.costInGp ? value.costInGp + '\xa0gp' : ''

    itemAddToList({
      id: Math.random() * 10,
      name: value.name,
      slot: value.nlot,
      cost: cost,
      weight: weight
    })
    setAdding(false)
  }

  const onAddingCancel = () => {
    console.log('adding was skipped =(')
    setAdding(false)
  }

  let content

  if (adding) {
    content = <ItemAddingPanel
      onSubmit={onAddingSubmit}
      handleCancel={onAddingCancel}
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

const mapDispatchToProps = (dispatch) => {
  return {
    itemAddToList: (value) => {
      dispatch({
        type: 'ITEM_ADD_TO_LIST',
        payload: value
      })
    }
  }
}

export default connect(undefined, mapDispatchToProps)(PageContent)
