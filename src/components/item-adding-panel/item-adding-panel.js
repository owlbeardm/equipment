import React from 'react'
import './item-adding-panel.css'
import Input from '../input'
import Select from '../select'
import Checkbox from '../checkbox'
import { reduxForm, Field } from 'redux-form'

const required = value => (value || typeof value === 'number' ? undefined : 'This field is required')

const onlyNumbers = (value) => {
  if (!value) {
    return value
  }
  return value.replace(/[^\d]/g, '')
}

const ItemAddingPanel = (props) => {
  const SLOT_OPTIONS = [
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

  const { handleSubmit, handleCancel } = props

  return (

    <div className="item-adding-panel">

      <div className="card-header card-header-success card-header-icon">
        <div className="card-icon p-2">
          <i className="material-icons">add_circle_outline</i>
        </div>
        <h3 className="header-text card-title">Add item to inventory</h3>
      </div>

      <div className="card-body">
        <form name="addItemForm" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <Field
                name='name'
                label='Name'
                component={Input}
                validate={required}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md">
              <Field
                name='costInGp'
                label='Cost in gp'
                component={Input}
                normalize={onlyNumbers}
              />
            </div>

            <div className="col-md">
              <Field
                name={'slot'}
                label={'Slot'}
                options={SLOT_OPTIONS}
                component={Select}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md">
              <Field
                name='weight'
                label='Weight'
                component={Input}
                normalize={onlyNumbers}
              />
            </div>

            <div className="col-md ">
              <div className="row">
                <div className="col">
                  <Field name='light' label='Light' component={Checkbox} />
                </div>
                <div className="col">
                  <Field name='negligible' label='Negligible' component={Checkbox} />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Add
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleCancel}
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

export default reduxForm({
  form: 'itemAddingForm'
})(ItemAddingPanel)
