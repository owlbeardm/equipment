import React from 'react'
import './item-adding-panel.css'
import Input from '../input'
import Select from '../select'
import Checkbox from '../checkbox'

const ItemAddingPanel = ({ onAddingSubmit, onAddingCancel }) => {
  const slotOptions = [
    'slotless',
    'weapon',
    'armor',
    'belt',
    'body',
    'chest',
    'eyes',
    'feet',
    'hands',
    'ring',
    'head',
    'headband',
    'neck',
    'shoulders',
    'wrists'
  ]

  return (

    <div className="item-adding-panel">

      <div className="card-header card-header-success card-header-icon">
        <div className="card-icon p-2">
          <i className="material-icons">add_circle_outline</i>
        </div>
        <h3 className="header-text card-title">Add item to inventory</h3>
      </div>

      <div className="card-body">
        <form name="addItemForm">
          <div className="row">
            <div className="col">
              <Input name={'Name'} />
            </div>
          </div>

          <div className="row">
            <div className="col-md">
              <Input name={'Cost in gp'} validation={'unchecked'} />
            </div>

            <div className="col-md">
              <Select
                name={'Slot'}
                options={slotOptions}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md">
              <Input name={'Weight'} />
            </div>

            <div className="col-md ">
              <div className="row">
                <div className="col">
                  <Checkbox label="Light" />
                </div>
                <div className="col">
                  <Checkbox label="Negligible" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md">
              <button
                className="btn btn-primary"
                onClick={onAddingSubmit}
              >
                Close
              </button>
              <button
                className="btn btn-danger"
                onClick={onAddingCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}

export default ItemAddingPanel
