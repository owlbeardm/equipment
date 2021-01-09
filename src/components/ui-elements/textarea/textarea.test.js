import React from 'react'
import { mount } from 'enzyme'

import Textarea from './textarea'

const mockUseEffect = jest.fn()
React.useEffect = mockUseEffect

const setup = (props) => {
  mockUseEffect.mockClear()

  const defaultProps = { input: { name: 'the-textarea', value: 'Some big text', onChange: () => { } }, label: 'the textarea' }
  return mount(<Textarea {...defaultProps} {...props} />)
}

describe('rendering testing', () => {
  test('renders without error', () => {
    const wrapper = setup()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('counts height on value prop change', () => {
    const currentProps = { input: { name: 'the-name', value: 'The value' } }
    const wrapper = setup(currentProps)
    mockUseEffect.mockClear()
    wrapper.setProps({ input: { name: 'the-name', value: 'The other value' } })
    expect(mockUseEffect).toHaveBeenCalled()
  })

  test('does not count height on update with the same value prop', () => {
    const wrapper = setup()
    mockUseEffect.mockClear()
    wrapper.update()
    expect(mockUseEffect).not.toHaveBeenCalled()
  })

  test('renders the value got from props on mount', () => {
    const nodeValue = 'Some saved text'
    const wrapper = setup({ input: { name: 'the-name', value: nodeValue } })
    const textareaNode = wrapper.find('[data-test="textarea-node"]')
    expect(textareaNode.prop('value')).toEqual(nodeValue)
  })
})
