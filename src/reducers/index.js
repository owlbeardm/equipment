import updateMoneyTable from './money-reducer'
import updateEquipmentTable from './equipment-reducer'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

const dataReducer = (state, action) => {
  return {
    money: updateMoneyTable(state, action),
    equipment: updateEquipmentTable(state, action)
  }
}

const rootReducer = {
  main: dataReducer,
  form: formReducer
}

export default combineReducers(rootReducer)
