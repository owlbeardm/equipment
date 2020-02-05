import { createStore, combineReducers } from 'redux'
import dataReducer from './reducers'
import { reducer as formReducer } from 'redux-form'

const rootReducer = {
  main: dataReducer,
  form: formReducer
}

const reducer = combineReducers(rootReducer)
const store = createStore(reducer)

export default store
