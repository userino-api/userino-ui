import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import { seamlessImmutableReconciler } from 'redux-persist-seamless-immutable'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import config from './config'
import createHash from './libs/crypto/hash'
import AppReducers from './reducers'

const storage_k = process.env.STORE_SECRET
const STORE_SECRET = createHash(storage_k || '')

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__ || {}

// Allow the passed state to be garbage-collected

const middleWares = [thunk]
if (config.loggers.isStoreEnabled) {
  const logger = createLogger({
    predicate: (getState, action: ReduxAction) => !!action && !!action.type
    // && !action.type.match(/^RC_CHAT__/)
  })

  middleWares.push(logger)
}

const persistedReducer = persistReducer(
  {
    key: 'fantasy-store',
    stateReconciler: seamlessImmutableReconciler,
    storage,
    transforms: [
      // seamlessImmutableTransformCreator({}),
      encryptTransform({
        secretKey: STORE_SECRET,
        onError(error) {
          console.error('encryptTransform', error)
          // Handle the error.
        },
      }),
    ],
    whitelist: ['auth'],
  },
  AppReducers,
)

const composerArgs = [applyMiddleware(...middleWares)]

// eslint-disable-next-line no-underscore-dangle
if (window.__REDUX_DEVTOOLS_EXTENSION__) composerArgs.push(window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(persistedReducer, compose(...composerArgs))
export const persistor = persistStore(store)
window.store = store

export default store
