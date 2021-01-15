import React, { useState } from 'react'
import './page-content.css'
import ControlsPanel from '../controls-panel/controls-panel'
import MoneyTable from '../money-table/money-table'
import EquipmentTable from '../equipment-table/equipment-table'
import InventoryItemPanel from '../inventory-item-panel'
import { connect } from 'react-redux'

export const UnconnectedPageContent = ({ editingItem, setEditingItem, itemAddToList, itemEditData }) => {
  const [view, setView] = useState('mainView')

  const onAdding = () => {
    setView('addingView')
  }

  const onEditing = (itemId) => {
    setEditingItem(itemId)
    setView('editingView')
  }

  const onAddingSubmit = (formValues) => {
    itemAddToList(formValues)
    setView('mainView')
  }

  const onEditingSubmit = (formValues) => {
    itemEditData(editingItem, formValues)
    setView('mainView')
  }

  const onCancel = () => {
    setEditingItem(null)
    setView('mainView')
  }

  let content

  switch (view) {
    case 'addingView':
      content = <InventoryItemPanel
        operation='add'
        onSubmit={onAddingSubmit}
        handleCancel={onCancel}
      />
      break
    case 'editingView':
      content = <InventoryItemPanel
        operation='edit'
        onSubmit={onEditingSubmit}
        handleCancel={onCancel}
      />
      break
    case 'mainView':
    default:
      content = (
        <div className="card-body" data-test="main-page">
          <ControlsPanel onAdding={onAdding} />
          {/* <MoneyTable /> */}
          <EquipmentTable onEditing={(id) => onEditing(id)} />
        </div>
      )
  }

  return (
    <div className="page-content card">
      {content}
    </div>
  )
}

const mapStateToProps = ({ main: { equipment } }) => {
  return {
    editingItem: equipment.editingItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    itemAddToList: (value) => {
      dispatch({
        type: 'ITEM_ADD_TO_LIST',
        payload: value
      })
    },
    itemEditData: (itemId, value) => {
      dispatch({
        type: 'ITEM_EDIT_DATA',
        itemId: itemId,
        payload: value
      })
    },
    setEditingItem: (value) => {
      dispatch({
        type: 'SET_EDITING_ITEM',
        itemId: value
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedPageContent)
