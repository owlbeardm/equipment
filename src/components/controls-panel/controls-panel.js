import React from 'react'
import { connect } from 'react-redux'
import './controls-panel.css'

const ControlsPanel = ({ onAdding, totalWeight }) => {
  return (
    <div className="controls-panel d-flex justify-content-between align-items-center py-2">
      <button className="btn btn-success"
        onClick={onAdding}
      >
        Add item
      </button>
      <span>Total weight:{`\u2003${totalWeight}`}</span>
    </div>
  )
}

const mapStateToProps = ({ main: { equipment } }) => {
  return {
    totalWeight: equipment.totalWeight
  }
}

export default connect(mapStateToProps)(ControlsPanel)
