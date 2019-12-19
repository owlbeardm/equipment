import React from 'react';
import './controls-panel.css';

const ControlsPanel = () => {

    return (
        <div className="controls-panel">
            <button className="btn btn-success">Add item</button>
            <span>Total weight:{'\u2003'}5</span>
        </div>
    );
}

export default ControlsPanel;