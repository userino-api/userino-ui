import appTypes from '@reducers/app/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  apps: any[]
}

const initialState: State = {
  apps: [],
}

const slice = createSlice({
  name: 'SPACE',
  initialState,
  extraReducers: {
    [appTypes.RESET]: () => initialState,
  },
  reducers: {
    setApps(state, action: PayloadAction<State['apps']>) {
      const apps = action.payload
      state.apps = apps
    },
  },
})

export const { reducer, actions } = slice
export default reducer
