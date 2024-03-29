import { combineReducers } from 'redux'
import app from './app/reducer'
import apps from './apps/reducer'
import projects from './projects/reducer'
import space from './space/reducer'

const AppReducer = combineReducers({
  app,
  space,
  apps,
  projects,
})

export type ReduxState = ReturnType<typeof AppReducer>

export default AppReducer
