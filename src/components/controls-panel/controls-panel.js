import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './controls-panel.css'

export const ControlsPanel = ({ onAdding, weightUnits }) => {
  // didn't destructure useState for testing purposes
  const [totalWeight, setTotalWeight] = React.useState()

  useEffect(() => {
    const newWeight = (weightUnits.bulksWeight +
      Math.floor(0.1 * weightUnits.lightCount) +
      Math.floor(0.001 * weightUnits.negligibleCount))
    setTotalWeight(newWeight)
  }, [weightUnits])

  return (
    <div className="controls-panel d-flex justify-content-between align-items-center py-2">
      <button className="btn btn-success"
        data-test="add-button"
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

ControlsPanel.propTypes = {
  onAdding: PropTypes.func.isRequired
}
