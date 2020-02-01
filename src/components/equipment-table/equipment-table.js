import React from 'react'
import { connect } from 'react-redux'
import './equipment-table.css'
import CardWithHeader from '../card-with-header'
import EquipmentRow from './equipment-row'

const EquipmentTable = ({ data }) => {
  const content = data.map((elem) => {
    return <EquipmentRow key={elem.id} {...elem} />
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

export default connect(mapStateToProps)(EquipmentTable)
