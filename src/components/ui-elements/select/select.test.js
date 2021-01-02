import React from 'react'
import { shallow } from 'enzyme'

import Select from './select'

const defaultProps = { input: { name: 'the-select' }, label: 'the select', options: ['first-option', 'second-option', 'third-option'] }

describe('rendering testing', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Select {...defaultProps} />)
  })
  test('renders without error', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('renders correct number of options (including empty one)', () => {
    const optionNodes = wrapper.find('[data-test="option"]')
    expect(optionNodes.length).toBe(defaultProps.options.length + 1)
  })
})
