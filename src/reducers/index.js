import updateMoneyTable from './money-reducer'
import updateEquipmentTable from './equipment-reducer'

const dataReducer = (state, action) => {
  return {
    money: updateMoneyTable(state, action),
    equipment: updateEquipmentTable(state, action)
  }
}

export default dataReducer
