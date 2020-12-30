import React from 'react'
import { shallow } from 'enzyme'

import InventoryError from './inventory-error'

const setup = (props = {}) => {
  const setupProps = { errorMsg: 'Some default error', ...props }
  return shallow(<InventoryError {...setupProps} />)
}

describe('rendering testing', () => {
  let wrapper

  test('renders without error', () => {
    wrapper = setup()
    const component = wrapper.find("[data-test='component-inventory-error']")
    expect(component.length).toBe(1)
  })

  test('renders error message from prop', () => {
    const message = 'Some test error'
    wrapper = setup({ errorMsg: message })
    const errorMsgNode = wrapper.find("[data-test='error-msg']")
    expect(errorMsgNode.text()).toEqual(message)
  })
})
