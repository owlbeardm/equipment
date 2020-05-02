import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './controls-panel.css'

const ControlsPanel = ({ onAdding, weightUnits }) => {
  const [totalWeight, setTotalWeight] = useState()
  useEffect(() => {
    const newWeight = (weightUnits.bulksWeight +
      Math.floor(0.1 * weightUnits.lightCount) +
      Math.floor(0.001 * weightUnits.negligibleCount))
    setTotalWeight(newWeight)
  }, [weightUnits])

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
    weightUnits: equipment.weightUnits
  }
}

export default connect(mapStateToProps)(ControlsPanel)
