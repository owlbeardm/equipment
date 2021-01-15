import React from 'react'
import { shallow, mount } from 'enzyme'
import { storeFactory } from '../../utils/test-utils'
import { Provider } from 'react-redux'

import PageContent, { UnconnectedPageContent } from './page-content'

const oneItemState = {
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

const defaultProps = { editingItem: 0, itemAddToList: () => { }, itemEditData: () => { }, setEditingItem: () => { } }

/**
 * @function sets up the wrapper to test the component
 * @param {string} renderType defines rendering type (shallow, mount) and component connection
 * @param {Object} props defines custom props for unconnected component
 * @param {Object} initialState defines initial store state
 * @returns wrapper of the selected type
 */
const setup = (renderType, props, initialState = {}) => {
  const store = storeFactory(initialState)
  switch (renderType) {
    case 'mount':
      return mount(<Provider store={store} ><PageContent /></Provider>)
    case 'unconnectedMount':
      return mount(<Provider store={store}><UnconnectedPageContent {...defaultProps} {...props} /></Provider>)
    case 'shallow':
    default:
      return shallow(<PageContent store={store} />).dive()
  }
}

describe('rendering testing', () => {
  let wrapper

  describe('renders correct elements depending on view', () => {
    test('renders main view on app mount', () => {
      wrapper = setup('shallow').dive()
      const mainViewContent = wrapper.find('[data-test="main-page"]')
      expect(mainViewContent.length).toBe(1)
    })

    test('renders form to add item for addingView', () => {
      wrapper = setup('mount')
      const addItemButton = wrapper.find('[data-test="add-button"]')
      addItemButton.simulate('click')
      const addItemInput = wrapper.find('input[name="name"]')
      expect(addItemInput.prop('value')).toBe('')
    })

    test('renders form to add item for addingView', () => {
      wrapper = setup('mount', {}, oneItemState)
      const editItemButton = wrapper.find('[data-test="equipment-row-component"] button[data-test="edit-button"]')
      editItemButton.simulate('click')
      const editItemInput = wrapper.find('input[name="name"]')
      expect(editItemInput.prop('value')).toBe(oneItemState.main.equipment.data[0].name)
    })
  })

  describe('dispatches correct actions', () => {
    test('calls itemAddToList to add an item', () => {
      const mockItemAddToList = jest.fn()
      wrapper = setup('unconnectedMount', { itemAddToList: mockItemAddToList })
      const addItemButton = wrapper.find('[data-test="add-button"]')
      addItemButton.simulate('click')
      wrapper.find('input[name="name"]').simulate('change', { target: { value: 'New item' } })
      const submitButton = wrapper.find('button[type="submit"]')
      submitButton.simulate('click')
      expect(mockItemAddToList).toHaveBeenCalled()
    })

    test('calls itemEditData to apply changes to existing item', () => {
      const mockItemEditData = jest.fn()
      wrapper = setup('unconnectedMount', { itemEditData: mockItemEditData }, oneItemState)
      const editItemButton = wrapper.find('[data-test="equipment-row-component"] button[data-test="edit-button"]')
      editItemButton.simulate('click')
      const submitButton = wrapper.find('button[type="submit"]')
      submitButton.simulate('click')
      expect(mockItemEditData).toHaveBeenCalled()
    })

    test('calls setEditingItem on edit button click', () => {
      const mockSetEditingItem = jest.fn()
      wrapper = setup('unconnectedMount', { setEditingItem: mockSetEditingItem }, oneItemState)
      const editItemButton = wrapper.find('[data-test="equipment-row-component"] button[data-test="edit-button"]')
      editItemButton.simulate('click')
      expect(mockSetEditingItem).toHaveBeenCalled()
    })
  })
})

describe('redux props testing', () => {
  let wrapper

  beforeEach(() => {
    wrapper = setup('shallow')
  })

  test('has editingItems prop', () => {
    wrapper = setup('shallow', {}, oneItemState)
    expect(wrapper.prop('editingItem')).toBe(oneItemState.main.equipment.editingItem)
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
