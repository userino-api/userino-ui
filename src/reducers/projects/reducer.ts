import appTypes from '@reducers/app/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { App, AppAccess, AppClient, Project } from '../../typings/core'

interface State {
  [key: string]: ReduxStateProject
}

export interface ReduxStateProject extends Project {
  apps?: App[]
  appClients?: AppClient[]
  access?: AppAccess[]
  authProviders?: any[]
}

const initialState: State = {}

const slice = createSlice({
  name: 'PROJECT',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(appTypes.RESET, () => initialState)
  },
  reducers: {
    set(state, action: PayloadAction<Project>) {
      const app = action.payload
      let stateApp = state[app.id]
      stateApp = { ...stateApp, ...app }
      state[app.id] = stateApp
    },

    setApps(state, action: PayloadAction<{ id: string; list: App[] }>) {
      const { id, list } = action.payload
      let stateObj = state[id]
      if (!stateObj) {
        console.error('No state app.')
        return
      }

      stateObj.apps = list
    },

    // ...

    setAppClients(state, action: PayloadAction<{ app_id: string; list: AppClient[] }>) {
      const { app_id, list } = action.payload
      let stateApp = state[app_id]
      if (!stateApp) {
        console.error('No state app.')
        return
      }

      stateApp.appClients = list
    },

    setAppAccessList(state, action: PayloadAction<{ app_id: string; list: AppAccess[] }>) {
      const { app_id, list } = action.payload
      let stateApp = state[app_id]
      if (!stateApp) {
        console.error('No state app.')
        return
      }

      stateApp.access = list
    },

    setAuthProviders(state, action: PayloadAction<{ app_id: string; list: ReduxStateApp['authProviders'] }>) {
      const { app_id, list } = action.payload
      let stateApp = state[app_id]
      if (!stateApp) {
        console.error('No state app.')
        return
      }

      stateApp.authProviders = list
    },
  },
})

export const { reducer, actions } = slice
export default reducer
