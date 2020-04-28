const updateEquipmentTable = (state, action) => {
  if (state === undefined) {
    return {
      nextId: 0,
      editingItem: null,
      sortOrder: 'id',
      totalWeight: 0,
      data: []
    }
  }

  switch (action.type) {
    case 'ITEM_ADD_TO_LIST': {
      const newData = [
        ...state.equipment.data,
        makeNewItem(state.equipment.nextId, action.payload)
      ]
      return {
        ...state.equipment,
        nextId: state.equipment.nextId + 1,
        totalWeight: calculateTotalWeight(newData),
        data: newData
      }
    }

    case 'ITEM_REMOVE_FROM_LIST': {
      const newData = updateOrRemoveItem(state.equipment.data, 'remove', action.itemId)
      return {
        ...state.equipment,
        totalWeight: calculateTotalWeight(newData),
        data: newData
      }
    }

    case 'ITEM_EDIT_DATA': {
      const newItemData = makeNewItem(action.itemId, action.payload)
      const newData = updateOrRemoveItem(state.equipment.data, 'update', action.itemId, newItemData)
      return {
        ...state.equipment,
        editingItem: null,
        totalWeight: calculateTotalWeight(newData),
        data: newData
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

const makeNewItem = (itemId, { name, amount = '1', costInGp, slot = 'slotless', weight, weightRadio = 'negligible', description }) => {
  const itemWeight = (weightRadio === 'bulk') ? weight : 0
  return {
    id: itemId,
    name,
    amount: parseInt(amount) || 1,
    slot,
    costInGp: parseFloat(costInGp) || 0,
    weight: parseInt(itemWeight) || 0,
    weightRadio,
    description
  }
}

const calculateTotalWeight = (data) => {
  const initialValue = 0
  const total = data.reduce(
    (sum, current) => sum + current.weight,
    initialValue
  )
  return total
}

export default updateEquipmentTable
