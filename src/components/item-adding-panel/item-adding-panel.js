import React from 'react'
import './item-adding-panel.css'
import Input from '../input'
import Select from '../select'
import { Radio, RadioGroup } from '../radio'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

const required = value => (value || typeof value === 'number' ? undefined : 'This field is required')

const decimal = value => (!value || value.match(/^(0|([1-9]\d*))(\.\d{1,2})?$/) ? undefined : 'The value must be decimal')

const whole = value => (!value || value.match(/^[1-9]\d*$/) ? undefined : 'The value must be an integer')

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

let ItemAddingPanel = (props) => {
  const { handleSubmit, handleCancel, weightRadio } = props

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
                type='number'
                component={Input}
                validate={decimal}
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
            <div className="col">
              <Field name='weightRadio' component={RadioGroup} >
                <Radio value='light' label='Light' />
                <Radio value='negligible' label='Negligible' />
                <Radio value='bulk' label='Bulk' />
              </Field>
            </div>
          </div>

          {(weightRadio === 'bulk') &&

            <div className="row">
              <div className="col">
                <Field
                  name='weight'
                  label='Weight'
                  type='number'
                  component={Input}
                  validate={[required, whole]}
                />
              </div>
            </div>
          }

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
ItemAddingPanel = connect(state => {
  console.log(state)
  const sth = selector(state, 'weightRadio')
  console.log('sth', sth)
  return { weightRadio: sth }
})(ItemAddingPanel)

export default ItemAddingPanel
