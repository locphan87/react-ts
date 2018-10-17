import { is } from 'ramda'
import { applyMiddleware, compose, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { isDEV } from '../utils/platform.util'
import rootReducer from './reducer'

declare var window: {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
}
const key = `banking-${process.env.NODE_ENV}`
const persistConfig = {
  key,
  storage,
  blacklist: []
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleware: any = []
const enhancers = [applyMiddleware(...middleware)]
const getComposer = () => {
  if (!isDEV()) {
    return compose
  }
  if (!is(Object, window)) {
    return compose
  }
  const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: reduxDevToolsCompose } = window

  return reduxDevToolsCompose || compose
}
const composer = getComposer()

export default (initialValue = {}) => {
  const store = createStore(
    persistedReducer,
    initialValue,
    composer(...enhancers)
  )
  const persistor = persistStore(store)

  return { store, persistor }
}
