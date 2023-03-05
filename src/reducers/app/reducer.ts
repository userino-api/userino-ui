import { createSlice } from '@reduxjs/toolkit'
import appTypes from './types'

interface State {}

const initialState: State = {}
const slice = createSlice({
  name: 'APP',
  initialState,
  extraReducers: {
    [appTypes.RESET]: () => initialState,
  },
  reducers: {},
})

export const { reducer, actions } = slice
export default reducer
