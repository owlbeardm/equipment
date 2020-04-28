import React from 'react'
import './inventory-item-panel.css'
import Input from '../ui-elements/input'
import Select from '../ui-elements/select'
import { Radio, RadioGroup } from '../ui-elements/radio'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import Textarea from '../ui-elements/textarea'

const required = value => (value || typeof value === 'number' ? undefined : 'This field is required')
const decimal = value => (!value || typeof value === 'number' || value.match(/^(0|([1-9]\d*))(\.\d{1,2})?$/) ? undefined : 'The value must be decimal')
const whole = value => (!value || typeof value === 'number' || value.match(/^[0-9]\d*$/) ? undefined : 'The value must be an integer')
const positive = value => (!value || value !== '0' ? undefined : 'The value must be above zero. You may choose "Negligible" option for small items')

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
  'head',
  'headband',
  'neck',
  'ring',
  'shoulders',
  'wrists'
]

let InventoryItemPanel = (props) => {
  const { operation = 'add', handleSubmit, handleCancel, weightRadio } = props

  let cardHeaderStyle, cardHeaderIcon, cardHeaderText, submitLabel

  switch (operation) {
    case 'edit':
      cardHeaderStyle = 'warning'
      cardHeaderIcon = 'create'
      cardHeaderText = 'Edit existing item'
      submitLabel = 'Save changes'
      break
    case 'add':
    default:
      cardHeaderStyle = 'success'
      cardHeaderIcon = 'add_circle_outline'
      cardHeaderText = 'Add item to inventory'
      submitLabel = 'Add'
  }

  return (

    <div className="inventory-item-panel">

      <div className={`card-header card-header-${cardHeaderStyle} card-header-icon`}>
        <div className="card-icon p-2">
          <i className="material-icons">{cardHeaderIcon}</i>
        </div>
        <h3 className="header-text card-title">{cardHeaderText}</h3>
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
                name={'amount'}
                label={'Amount'}
                component={Input}
                validate={whole}
              />
            </div>

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
                  validate={[required, whole, positive]}
                />
              </div>
            </div>
          }

          <div className="row">
            <div className="col">
              <Field
                name='description'
                label='Description'
                component={Textarea}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                {submitLabel}
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
InventoryItemPanel = reduxForm({
  form: 'inventoryItemForm',
  enableReinitialize: true
})(InventoryItemPanel)

const mapStateToProps = (state) => {
  // Decorate with connect to read form values
  const selector = formValueSelector('inventoryItemForm')
  const weightRadio = selector(state, 'weightRadio')

  const { editingItem, data } = state.main.equipment

  return {
    weightRadio: weightRadio,
    initialValues: data.find((elem) => elem.id === editingItem)
  }
}

export default connect(mapStateToProps)(InventoryItemPanel)
