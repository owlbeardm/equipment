import { createStore, combineReducers } from 'redux'
import dataReducer from './reducers'
import { reducer as formReducer } from 'redux-form'

const STATE_VERSION = 2

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify({
      stateVersion: STATE_VERSION,
      stateData: state
    })
    localStorage.setItem('state', serializedState)
  } catch (error) {
    console.log(error)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined

    const loadedState = JSON.parse(serializedState)

    if (loadedState.stateVersion === STATE_VERSION) {
      return loadedState.stateData
    } else {
      return migrateStateData(loadedState)
    }
  } catch (error) {
    console.log(error)
  }
}

function migrateStateData(loadedState) {
  console.log('State version migration: from', loadedState.stateVersion, 'to', STATE_VERSION)
  switch (loadedState.stateVersion) {
    case 1: {
      loadedState.stateData.main.equipment.data.forEach((elem) => {
        if (!elem.amount) {
          elem.amount = 1
        }
      })
      return loadedState.stateData
    }
    default:
      return loadedState.stateData
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
