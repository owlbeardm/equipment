import React from 'react'
import { shallow } from 'enzyme'

import Header from './header'

const setup = () => shallow(<Header />)

describe('rendering testing', () => {
  let wrapper

  beforeEach(() => {
    wrapper = setup()
  })

  test('renders without error', () => {
    const appComponent = wrapper.find("[data-test='component-header']")
    expect(appComponent.length).toBe(1)
  })

  test('contains app logo', () => {
    const appComponent = wrapper.find("[data-test='app-logo']")
    expect(appComponent.length).toBe(1)
  })

  test('contains project name', () => {
    const appComponent = wrapper.find("[data-test='project-name']")
    expect(appComponent.length).toBe(1)
  })
})
