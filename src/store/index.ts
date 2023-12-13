import { createStore,combineReducers, compose, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import handleNum from "./NumStatus/reducer"
import handleMenu from "./MenuStatus/reducer"

// 组合各个模块的reducer
const reducers = combineReducers({handleNum,handleMenu})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const store = createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)))

// const store = createStore(reducers,/* preloadedState, */
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store 