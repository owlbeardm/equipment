import React from 'react'
import './card-with-header.css'

const CardWithHeader = (props) => {
  const headerLabel = props.headerLabel || null
  return (
    <div className="card-with-header card card-plain">
      <div className="card-header card-header-primary">
        <h4 className="mb-0 text-dark">{headerLabel}</h4>
      </div>
      {props.children}
    </div>

  )
}

export default CardWithHeader
