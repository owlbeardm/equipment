import { createStore, combineReducers } from 'redux'
import dataReducer from './reducers'
import { reducer as formReducer } from 'redux-form'

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (error) {
    console.log(error)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (error) {
    console.log(error)
  }
}

const rootReducer = {
  main: dataReducer,
  form: formReducer
}
const reducer = combineReducers(rootReducer)

const persistedState = loadFromLocalStorage()

// @ts-ignore
const middlewares = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  reducer,
  persistedState,
  middlewares
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
