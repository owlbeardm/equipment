import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './equipment-table.css'
import EquipmentRow from './equipment-row'
import EquipmentTableHeader from './equipment-table-header'
import InventoryError from '../inventory-error'

const EquipmentTable = ({ equipmentData, sortOrder = 'id', itemRemoveFromList, onEditing }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const sortArray = type => {
      let sorted

      switch (type) {
        case 'name':
          sorted = [...equipmentData].sort((a, b) => {
            a = a.name.toLowerCase()
            b = b.name.toLowerCase()
            if (a > b) {
              return 1
            }
            if (a < b) {
              return -1
            }
            return 0
          })
          break
        case 'weight':
          sorted = [...equipmentData].sort((a, b) => b.weight - a.weight)
          break
        default:
          sorted = [...equipmentData].sort((a, b) => a.id - b.id)
      }

      setData(sorted)
    }

    sortArray(sortOrder)
  }, [equipmentData, sortOrder])

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
    <EquipmentTableHeader>
      {content}
    </EquipmentTableHeader>
  )
}

const mapStateToProps = ({ main: { equipment } }) => {
  return {
    equipmentData: equipment.data,
    sortOrder: equipment.sortOrder
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
