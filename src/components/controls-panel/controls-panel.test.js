import React from 'react'
import { mount } from 'enzyme'

import { ControlsPanel } from './controls-panel'

const mockSetTotalWeight = jest.fn()
React.useState = jest.fn(() => [0, mockSetTotalWeight])

const setup = (props) => {
  const defaultProps = { onAdding: jest.fn(), weightUnits: {} }
  return mount(<ControlsPanel {...defaultProps} {...props} />)
}

describe('rendering testing', () => {
  let wrapper

  beforeEach(() => {
    wrapper = setup()
    mockSetTotalWeight.mockClear()
  })

  test('renders without error', () => {
    expect(wrapper).toBeTruthy()
  })

  test('calls onAdding on add-button click', () => {
    const addButton = wrapper.find('button[data-test="add-button"]')
    wrapper.prop('onAdding').mockClear()
    addButton.simulate('click')
    expect(wrapper.prop('onAdding')).toHaveBeenCalled()
  })

  test('sets totalWeight value on weightUnits change', () => {
    wrapper.setProps({ weightUnits: { bulksWeight: 7 } })
    expect(mockSetTotalWeight).toHaveBeenCalled()
  })

  test('does not recalculate totalWeight on update with same weightUnits', () => {
    wrapper.setProps({ otherProp: false })
    expect(mockSetTotalWeight).not.toHaveBeenCalled()
  })
})
