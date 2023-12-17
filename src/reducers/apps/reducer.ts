import appTypes from '@reducers/app/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { App,  AppClient } from '../../typings/core'

interface State {
  [key: string]: ReduxStateApp
}

export interface ReduxStateApp extends App {
  appClients?: AppClient[]
  authProviders?: any[]
}

const initialState: State = {}

const slice = createSlice({
  name: 'APPS',
  initialState,
  extraReducers: {
    [appTypes.RESET]: () => initialState,
  },
  reducers: {
    setApp(state, action: PayloadAction<App>) {
      const app = action.payload
      let stateApp = state[app.id]
      stateApp = { ...stateApp, ...app }
      state[app.id] = stateApp
    },

    setAppClients(state, action: PayloadAction<{ app_id: string; list: AppClient[] }>) {
      const { app_id, list } = action.payload
      let stateApp = state[app_id]
      if (!stateApp) {
        console.error('No state app.')
        return
      }

      stateApp.appClients = list
    },
  },
})

export const { reducer, actions } = slice
export default reducer
