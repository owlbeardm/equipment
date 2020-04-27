const updateEquipmentTable = (state, action) => {
  if (state === undefined) {
    return {
      nextId: 0,
      editingItem: null,
      data: [],
      sortOrder: 'id'
    }
  }

  switch (action.type) {
    case 'ITEM_ADD_TO_LIST':
      return {
        ...state.equipment,
        nextId: state.equipment.nextId + 1,
        data: [
          ...state.equipment.data,
          makeNewItem(state.equipment.nextId, action.payload)
        ]
      }

    case 'ITEM_REMOVE_FROM_LIST':
      return {
        ...state.equipment,
        data: updateOrRemoveItem(state.equipment.data, 'remove', action.itemId)
      }

    case 'ITEM_EDIT_DATA': {
      const newItemData = makeNewItem(action.itemId, action.payload)
      return {
        ...state.equipment,
        editingItem: null,
        data: updateOrRemoveItem(state.equipment.data, 'update', action.itemId, newItemData)
      }
    }

    case 'SET_EDITING_ITEM': {
      return {
        ...state.equipment,
        editingItem: action.itemId
      }
    }

    case 'SET_SORTING_ORDER': {
      return {
        ...state.equipment,
        sortOrder: action.payload
      }
    }

    default:
      return state.equipment
  }
}

const updateOrRemoveItem = (data, operation, itemId, newItemData) => {
  const idx = data.findIndex((elem) => elem.id === itemId)

  if (idx < 0) return data

  switch (operation) {
    case 'update':
      return [
        ...data.slice(0, idx),
        newItemData,
        ...data.slice(idx + 1)
      ]
    case 'remove':
      return [
        ...data.slice(0, idx),
        ...data.slice(idx + 1)
      ]
    default:
      return data
  }
}

const makeNewItem = (itemId, { name, costInGp, slot = 'slotless', weight, weightRadio = 'negligible', description }) => {
  return {
    id: itemId,
    name,
    slot,
    costInGp: parseFloat(costInGp) || 0,
    weight: parseInt(weight) || 0,
    weightRadio,
    description
  }
}

export default updateEquipmentTable
