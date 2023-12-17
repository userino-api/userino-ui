import { middleware } from './middleware'
import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  shallowEqual,
  TypedUseSelectorHook,
} from 'react-redux'
import { Action } from 'redux'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import createHash from '../libs/crypto/hash'
import AppReducers from './index'

const storage_k = process.env.STORE_SECRET
const STORE_SECRET = createHash(storage_k || '')

const persistedReducer = persistReducer(
  {
    key: 'userino-store',
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

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleware)
  },
})

export const persistor = persistStore(store)

export const useAppDispatch = () => useReduxDispatch<ReduxDispatch>()
export const useAppSelector: TypedUseSelectorHook<ReduxState> = (selector) => useReduxSelector(selector, shallowEqual)

/* Types */
export type ReduxStore = typeof store
export type ReduxState = ReturnType<typeof AppReducers>
export type ReduxDispatch = typeof store.dispatch
export type ReduxThunkAction<ReturnType = void> = ThunkAction<ReturnType, ReduxState, unknown, Action>

// @ts-ignore
window.store = store
export default store
