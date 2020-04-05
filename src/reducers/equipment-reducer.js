const updateEquipmentTable = (state, action) => {
  if (state === undefined) {
    return {
      editingItem: null,
      data: []
    }
  }

  switch (action.type) {
    case 'ITEM_ADD_TO_LIST':
      return {
        ...state.equipment,
        data: [
          ...state.equipment.data,
          action.payload
        ]
      }

    case 'ITEM_REMOVE_FROM_LIST':
      return {
        ...state.equipment,
        data: updateOrRemoveItem(state.equipment.data, 'remove', action.itemId)
      }

    case 'ITEM_EDIT_DATA': {
      const itemId = action.payload.id
      return {
        ...state.equipment,
        editingItem: null,
        data: updateOrRemoveItem(state.equipment.data, 'update', itemId, action.payload)
      }
    }

    case 'SET_EDITING_ITEM': {
      return {
        ...state.equipment,
        editingItem: action.itemId
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

export default updateEquipmentTable
