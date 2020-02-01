const updateMoneyTable = (state, action) => {
  if (state === undefined) {
    return {
      data: {
        platinum: {
          label: 'Platinum',
          value: 0,
          unit: 'pp'
        },
        gold: {
          label: 'Gold',
          value: 0,
          unit: 'gp'
        },
        silver: {
          label: 'Silver',
          value: 0,
          unit: 'sp'
        },
        copper: {
          label: 'Copper',
          value: 0,
          unit: 'cp'
        }
      },
      hidden: true
    }
  }

  switch (action.type) {
    case 'TOGGLE_HIDDEN':
      return {
        ...state.money,
        hidden: !state.money.hidden
      }

    default:
      return state.money
  }
}

export default updateMoneyTable
