import appTypes from '@reducers/app/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  projects: any[]
}

const initialState: State = {
  projects: [],
}

const slice = createSlice({
  name: 'SPACE',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(appTypes.RESET, () => initialState)
  },
  reducers: {
    setProjects(state, action: PayloadAction<State['projects']>) {
      const list = action.payload
      state.projects = list
    },
  },
})

export const { reducer, actions } = slice
export default reducer
