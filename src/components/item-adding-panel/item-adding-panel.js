import React from 'react'
import './item-adding-panel.css'
import Input from '../input'
import Select from '../select'
import Checkbox from '../checkbox'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

const required = value => (value || typeof value === 'number' ? undefined : 'This field is required')

const onlyNumbers = (value) => {
  if (!value) {
    return value
  }
  return value.replace(/[^\d]/g, '')
}

const nullToEmpty = value => (value === '0') ? '' : value

let ItemAddingPanel = (props) => {
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

  const { handleSubmit, handleCancel, weight, light, negligible } = props

  return (

    <div className="item-adding-panel">

      <div className="card-header card-header-success card-header-icon">
        <div className="card-icon p-2">
          <i className="material-icons">add_circle_outline</i>
        </div>
        <h3 className="header-text card-title">Add item to inventory</h3>
      </div>

      <div className="card-body">
        <form name="addItemForm" onSubmit={handleSubmit} autoComplete="off">
          <div className="row">
            <div className="col">
              <Field
                name='name'
                label='Name'
                type='text'
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
                type='tel'
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
                type='tel'
                component={Input}
                normalize={onlyNumbers}
                format={nullToEmpty}
                disabled={(light || negligible) && 'disabled'}
              />
            </div>

            <div className="col-md ">
              <div className="row">
                <div className="col">
                  <Field
                    name='light'
                    label='Light'
                    component={Checkbox}
                    disabled={(weight || negligible) && 'disabled'}
                  />
                </div>
                <div className="col">
                  <Field
                    name='negligible'
                    label='Negligible'
                    component={Checkbox}
                    disabled={(weight || light) && 'disabled'}
                  />
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

// Decorate with redux-form
ItemAddingPanel = reduxForm({
  form: 'itemAddingForm'
})(ItemAddingPanel)

// Decorate with connect to read form values
const selector = formValueSelector('itemAddingForm')
ItemAddingPanel = connect(state => selector(state, 'weight', 'light', 'negligible'))(ItemAddingPanel)

export default ItemAddingPanel
