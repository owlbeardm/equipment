import { createStore, combineReducers } from 'redux'
import dataReducer from './reducers'
import { reducer as formReducer } from 'redux-form'

const rootReducer = {
  main: dataReducer,
  form: formReducer
}
const reducer = combineReducers(rootReducer)

// @ts-ignore
const middlewares = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, {}, middlewares)

export default store
