import React from 'react'
import { connect } from 'react-redux'
import './equipment-table.css'
import CardWithHeader from '../card-with-header'
import EquipmentRow from './equipment-row'

const EquipmentTable = ({ data, itemRemoveFromList }) => {
  const content = data.map((elem) => {
    return <EquipmentRow key={elem.id} {...elem} onRemove={itemRemoveFromList} />
  })

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
        payload: value
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentTable)
