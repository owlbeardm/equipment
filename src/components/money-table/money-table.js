import React from 'react'
import './money-table.css'
import MoneyTableHeader from './money-table-header'
import MoneyTableRow from './money-table-row'

export default class MoneyTable extends React.Component {
  state = {
    data: {
      platinum: {
        label: 'Platinum',
        value: 2,
        unit: 'pp'
      },
      gold: {
        label: 'Gold',
        value: 2670,
        unit: 'gp'
      },
      silver: {
        label: 'Silver',
        value: 500,
        unit: 'sp'
      },
      copper: {
        label: 'Copper',
        value: 0,
        unit: 'cp'
      }
    },
    hidden: false
  };

  toggleHidden = () => {
    this.setState((state) => {
      return { hidden: !state.hidden }
    })
  }

  render() {
    const { platinum, gold, silver, copper } = this.state.data
    const isVisible = this.state.hidden

    const totalAmount = 10 * platinum.value +
      gold.value +
      0.1 * silver.value +
      0.01 * copper.value

    const tableBody = (
      <tbody>
        <MoneyTableRow {...platinum} />
        <MoneyTableRow {...gold} />
        <MoneyTableRow {...silver} />
        <MoneyTableRow {...copper} />
      </tbody>
    )

    return (
      <MoneyTableHeader totalAmount={totalAmount} isVisible={isVisible} toggleHidden={this.toggleHidden}>
        <div className="card-body">
          <table className="money-table table table-sm">
            {tableBody}
          </table>
        </div>
      </MoneyTableHeader>
    )
  }
}
