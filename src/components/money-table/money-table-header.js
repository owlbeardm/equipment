import React from 'react'

const MoneyTableHeader = (props) => {
  const { totalAmount, isVisible, toggleHidden } = props
  const actionArrow = isVisible ? 'down' : 'up'
  const content = isVisible ? props.children : null
  return (

    <div className="money-table-header card-with-header card card-plain">
      <div role="presentation"
        className="card-header card-header-primary d-flex justify-content-between"
        onClick={toggleHidden}
      >
        <h4 className="mb-0 text-dark flex-grow-1">Money</h4>
        <h4 className="mb-0 text-dark">Total: {totalAmount}gp</h4>
        <i className={`mb-0 text-dark pl-2 fas fa-chevron-${actionArrow}`}></i>
      </div>
      {content}
    </div>

  )
}

export default MoneyTableHeader
