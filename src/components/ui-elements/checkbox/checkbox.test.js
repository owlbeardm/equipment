import React from 'react'
import { shallow } from 'enzyme'

import Checkbox from './checkbox'

test('renders without error', () => {
  const defaultProps = { input: { name: 'the-checkbox' }, label: 'the checkbox', disabled: false }
  const wrapper = shallow(<Checkbox {...defaultProps} />)
  expect(wrapper.html()).toMatchSnapshot()
})
