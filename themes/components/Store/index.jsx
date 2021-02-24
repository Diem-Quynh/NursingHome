import { createStore, combineReducers } from 'redux'
import _ from 'lodash'

const reducer = (state = {}, action) => {
  if(action.type === "setStore"){
    state = {
      ...state,
    }
    _.set(state, action.payload.path, action.payload.value)
    return state
  }
  return state
}

/* const reducer = combineReducers({
  store: storeReducer
}) */

const setStore = (path, value) => ({
  type: 'setStore',
  payload: {
    path,
    value
  }
});

const makeStore = (initState = {}, options) => {
  let devToolExtensions = (!options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__) ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
  return createStore(reducer, initState, devToolExtensions)
}
export {
  makeStore,
  setStore
}