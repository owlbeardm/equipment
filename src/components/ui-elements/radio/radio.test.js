import React from 'react'
import { shallow } from 'enzyme'

import Radio from './radio'
import RadioGroup from './radio-group'

const defaultRadioProps = { input: { value: '', onChange: () => { } }, label: 'the radio', value: 'the-radio' }
const childElements = [
  shallow(<Radio {...defaultRadioProps} />),
  shallow(<Radio {...defaultRadioProps} />)
]
const defaultGroupProps = { input: {}, children: childElements }

describe('Radio component testing', () => {
  test('renders without error', () => {
    const wrapper = shallow(<Radio {...defaultRadioProps} />)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('RadioGroup component testing', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<RadioGroup {...defaultGroupProps} />)
  })

  test('renders without error', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('renders all children elements', () => {
    const childrenNumber = wrapper.find('input[type="radio"]')
    expect(childrenNumber.length).toBe(childElements.length)
  })
})
