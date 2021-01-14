import React from 'react'
import { shallow, mount } from 'enzyme'
import { storeFactory } from '../../utils/test-utils'
import { Provider } from 'react-redux'

import PageContent from './page-content'

const shallowSetup = (initialState = {}) => {
  const store = storeFactory(initialState)
  return shallow(<PageContent store={store} />).dive()
}

const mountSetup = (initialState = {}) => {
  const store = storeFactory(initialState)
  return mount(<Provider store={store} ><PageContent /></Provider>)
}

describe('rendering testing', () => {
  describe('renders correct elements depending on view', () => {
    let wrapper

    test('renders main view on app mount', () => {
      wrapper = shallowSetup().dive()
      const mainViewContent = wrapper.find('[data-test="main-page"]')
      expect(mainViewContent.length).toBe(1)
    })

    test('renders form to add item for addingView', () => {
      wrapper = mountSetup()
      const addItemButton = wrapper.find('[data-test="add-button"]')
      addItemButton.simulate('click')
      const addItemInput = wrapper.find('input[name="name"]')
      expect(addItemInput.prop('value')).toBe('')
    })

    test('renders form to add item for addingView', () => {
      const initialState = {
        main: {
          equipment: {
            editingItem: 0,
            weightUnits: {
              bulksWeight: 1,
              lightCount: 0,
              negligibleCount: 0
            },
            data: [{
              id: 0,
              name: 'The thing',
              amount: 1,
              slot: 'slotless',
              costInGp: 0.2,
              weight: 1,
              weightRadio: 'bulk',
              description: ''
            }]
          }
        }
      }
      wrapper = mountSetup(initialState)
      const editItemButton = wrapper.find('[data-test="equipment-row-component"] button[data-test="edit-button"]')
      editItemButton.simulate('click')
      const editItemInput = wrapper.find('input[name="name"]')
      expect(editItemInput.prop('value')).toBe(initialState.main.equipment.data[0].name)
    })
  })
})

describe('redux props testing', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowSetup()
  })

  test('has editingItems prop', () => {
    const initialState = {
      main: {
        equipment: {
          editingItem: 0
        }
      }
    }
    wrapper = shallowSetup(initialState)
    expect(wrapper.prop('editingItem')).toBe(initialState.main.equipment.editingItem)
  })

  test('has itemAddToList prop', () => {
    expect(wrapper.prop('itemAddToList')).toBeInstanceOf(Function)
  })

  test('has itemEditData prop', () => {
    expect(wrapper.prop('itemEditData')).toBeInstanceOf(Function)
  })

  test('has setEditingItem prop', () => {
    expect(wrapper.prop('setEditingItem')).toBeInstanceOf(Function)
  })
})
