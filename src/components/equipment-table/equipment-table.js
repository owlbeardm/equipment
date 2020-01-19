import React from 'react'
import './equipment-table.css'
import CardWithHeader from '../card-with-header'
import EquipmentRow from './equipment-row'

export default class EquipmentTable extends React.Component {
  state = {
    data: [
      {
        id: 0,
        name: 'Grappling Hook',
        slot: '',
        cost: '1gp',
        weight: 'small'
      },
      {
        id: 1,
        name: 'Corset of the Vishkanya',
        slot: 'body',
        cost: '3000gp',
        weight: '1'
      },
      {
        id: 2,
        name: 'Ring of Energy Resistance, greater',
        slot: 'hand',
        cost: '44000gp',
        weight: 'small'
      },
      {
        id: 3,
        name: 'Steel Dragon Wing',
        slot: '',
        cost: '',
        weight: 'small'
      },
      {
        id: 4,
        name: 'Longsword',
        slot: '',
        cost: '15gp',
        weight: '1'
      },
      {
        id: 5,
        name: "Thieves' Tools, Masterwork",
        slot: '',
        cost: '100gp',
        weight: 'small'
      }
    ]
  };

  render() {
    const { data } = this.state
    const content = data.map((elem) => {
      return <EquipmentRow {...elem} />
    })

    return (
      <CardWithHeader headerLabel="Equipment">
        {content}
      </CardWithHeader>
    )
  }
}
