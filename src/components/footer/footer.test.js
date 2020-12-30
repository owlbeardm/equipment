import React from 'react'
import { shallow } from 'enzyme'

import Footer from './footer'

const setup = () => shallow(<Footer />)

describe('rendering testing', () => {
  let wrapper

  beforeEach(() => {
    wrapper = setup()
  })

  test('renders without error', () => {
    const appComponent = wrapper.find("[data-test='component-footer']")
    expect(appComponent.length).toBe(1)
  })

  test('contains four social media links', () => {
    const appComponent = wrapper.find("a[data-test='social-link']")
    expect(appComponent.length).toBe(4)
  })

  test('contains credits', () => {
    const appComponent = wrapper.find("[data-test='project-credits']")
    expect(appComponent.length).toBe(1)
  })
})
