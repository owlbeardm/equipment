const updateEquipmentTable = (state, action) => {
  if (state === undefined) {
    return {
      // TO DO: replace dummy initial state with empty Array
      data: [
        {
          id: 0,
          name: 'Traveler kit',
          slot: 'slotless',
          cost: '1\xa0gp',
          weight: 'light'
        }
      ]
    }
  }

  switch (action.type) {
    case 'ITEM_ADD_TO_LIST':
      return {
        data: [
          ...state.equipment.data,
          action.payload
        ]
      }

    case 'ITEM_REMOVE_FROM_LIST':
      return {
        data: updateItem(state.equipment.data, action.payload)
      }

    default:
      return state.equipment
  }
}

const updateItem = (data, itemId, itemData) => {
  const idx = data.findIndex((elem) => elem.id === itemId)

  if (idx < 0) return data

  if (itemData) {
    return [
      ...data.slice(0, idx),
      itemData,
      ...data.slice(idx + 1)
    ]
  } else {
    return [
      ...data.slice(0, idx),
      ...data.slice(idx + 1)
    ]
  }
}

export default updateEquipmentTable
