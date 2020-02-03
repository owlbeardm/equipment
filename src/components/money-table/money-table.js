import React from 'react'
import './money-table.css'
import { connect } from 'react-redux'

import MoneyTableHeader from './money-table-header'
import MoneyTableRow from './money-table-row'

const MoneyTable = ({ data, hidden, toggleHidden }) => {
  const { platinum, gold, silver, copper } = data

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
    <MoneyTableHeader totalAmount={totalAmount} isHidden={hidden} toggleHidden={toggleHidden} >
      <div className="card-body">
        <table className="money-table table table-sm">
          {tableBody}
        </table>
      </div>
    </MoneyTableHeader>
  )
}

const mapStateToProps = ({ main: { money } }) => {
  return {
    data: money.data,
    hidden: money.hidden
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHidden: () => {
      dispatch({
        type: 'TOGGLE_HIDDEN'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoneyTable)
