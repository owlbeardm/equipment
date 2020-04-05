import React from 'react'
import { connect } from 'react-redux'
import './equipment-table.css'
import CardWithHeader from '../card-with-header'
import EquipmentRow from './equipment-row'
import InventoryError from '../inventory-error'

const EquipmentTable = ({ data, itemRemoveFromList, onEditing }) => {
  let content

  if (data.length === 0) {
    content = <InventoryError errorMsg="Seems like your inventory is empty. Add the first item" />
  } else {
    content = data.map((elem) => {
      return <EquipmentRow
        key={elem.id}
        {...elem}
        onEdit={(id) => onEditing(id)}
        onRemove={itemRemoveFromList}
      />
    })
  }

  return (
    <CardWithHeader headerLabel="Equipment">
      {content}
    </CardWithHeader>
  )
}

const mapStateToProps = ({ main: { equipment } }) => {
  return {
    data: equipment.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    itemRemoveFromList: (value) => {
      dispatch({
        type: 'ITEM_REMOVE_FROM_LIST',
        itemId: value
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentTable)
