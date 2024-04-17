import appTypes from '@reducers/app/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'
import { App, AppClient, UserFull } from '../../typings/core'

interface State {
  [key: string]: ReduxStateApp
}

export interface ReduxStateApp extends App {
  appClients?: AppClient[]
  authProviders?: any[]
  users: UserFull[]
  userCount?: number
}

const initialState: State = {}

const slice = createSlice({
  name: 'APPS',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(appTypes.RESET, () => initialState)
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

    setUserCount(state, action: PayloadAction<{ app_id: string; value: number }>) {
      const { app_id, value } = action.payload
      let stateApp = state[app_id]
      if (!stateApp) {
        console.error('No state app.')
        return
      }

      stateApp.userCount = value
    },

    setUsers(state, action: PayloadAction<{ app_id: string; list: ReduxStateApp['users'] }>) {
      const { app_id, list } = action.payload
      let stateApp = state[app_id]
      if (!stateApp) {
        console.error('No state app.')
        return
      }

      stateApp.users = list
    },

    appendUsers(state, action: PayloadAction<{ app_id: string; list: ReduxStateApp['users'] }>) {
      const { app_id, list } = action.payload
      let stateApp = state[app_id]
      if (!stateApp) {
        console.error('No state app.')
        return
      }

      let listCleaned = _.filter(list, (item) => !_.find(stateApp.users, (stateItem) => stateItem.id === item.id))
      stateApp.users = stateApp.users.concat(listCleaned)
    },
  },
})

export const { reducer, actions } = slice
export default reducer
