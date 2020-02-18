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

    default:
      return state.equipment
  }
}

export default updateEquipmentTable
