import React from 'react'
import './controls-panel.css'

const ControlsPanel = () => {
  return (
    <div className="controls-panel d-flex justify-content-between align-items-center py-2">
      <button className="btn btn-success">Add item</button>
      <span>Total weight:{'\u2003'}5</span>
    </div>
  )
}

export default ControlsPanel
