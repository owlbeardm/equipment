import { createStore, combineReducers } from 'redux'
import dataReducer from './reducers'

const rootReducer = {
  main: dataReducer
}

const reducer = combineReducers(rootReducer)
const store = createStore(reducer)

export default store
