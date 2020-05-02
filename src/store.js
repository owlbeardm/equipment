import { createStore, combineReducers } from 'redux'
import dataReducer from './reducers'
import { reducer as formReducer } from 'redux-form'

const STATE_VERSION = 3

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
  // eslint-disable-next-line default-case
  switch (loadedState.stateVersion) {
    case 1: {
      loadedState.stateData.main.equipment.data.forEach((elem) => {
        if (!elem.amount) {
          elem.amount = 1
        }
      })
    }
    // eslint-disable-next-line no-fallthrough
    case 2: {
      const weightUnits = {
        bulksWeight: 0,
        lightCount: 0,
        negligibleCount: 0
      }

      const equipment = loadedState.stateData.main.equipment

      equipment.data.forEach((elem) => {
        switch (elem.weightRadio) {
          case 'bulk':
            weightUnits.bulksWeight += elem.weight * elem.amount
            break
          case 'light':
            weightUnits.lightCount += elem.amount
            break
          case 'negligible':
          default:
            weightUnits.negligibleCount += elem.amount
        }
      })

      equipment.weightUnits = weightUnits
    }
  }
  return loadedState.stateData
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
