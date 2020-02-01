const updateEquipmentTable = (state, action) => {
  if (state === undefined) {
    return {
      // TO DO: replace dummy initial state with empty Array
      data: [
        {
          id: 0,
          name: 'Traveler kit',
          slot: '',
          cost: '1gp',
          weight: 'light'
        }
      ]
    }
  }

  switch (action.type) {
    default:
      return state.equipment
  }
}

export default updateEquipmentTable
