import React from 'react'
import { shallow } from 'enzyme'

import Input from './input'

const validMetaProps = { touched: true, pristine: false, valid: true, invalid: false }
const invalidMetaProps = { touched: true, pristine: false, valid: false, invalid: true, error: 'Bad input' }

const setup = (props) => {
  const defaultProps = { input: { name: 'the-input' }, type: 'text', label: 'the input', disabled: false }
  return shallow(<Input {...defaultProps} {...props} />)
}

describe('rendering testing', () => {
  let wrapper

  test('renders without error', () => {
    wrapper = setup({ meta: invalidMetaProps })
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('valid input data', () => {
    beforeEach(() => {
      wrapper = setup({ meta: validMetaProps })
    })

    test('contains valid class', () => {
      const validClassNode = wrapper.find('.has-success')
      expect(validClassNode.length).toBe(1)
    })

    test('contains success icon', () => {
      const iconNode = wrapper.find('.material-icons')
      expect(iconNode.text()).toEqual('done')
    })

    test('error message is hidden', () => {
      const errorMsg = wrapper.find('[data-test="error-message"]')
      expect(errorMsg.length).toBe(0)
    })
  })

  describe('invalid input data', () => {
    beforeEach(() => {
      wrapper = setup({ meta: invalidMetaProps })
    })
    test('contains invalid class', () => {
      const invalidClassNode = wrapper.find('.has-danger')
      expect(invalidClassNode.length).toBe(1)
    })

    test('contains error icon', () => {
      const iconNode = wrapper.find('.material-icons')
      expect(iconNode.text()).toEqual('clear')
    })

    test('shows error message', () => {
      const errorMsg = wrapper.find('[data-test="error-message"]')
      expect(errorMsg.text()).toEqual(invalidMetaProps.error)
    })
  })
})
