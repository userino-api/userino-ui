import adminApi from '../../libs/userino-dashboard-api'
import { DispatcherResponse } from '../../typings/ReduxDispatch'
import SpaceDispatcher from '../space/dispatcher'
import api from './api'
import apiFirebase from './api-firebase'
import { actions } from './reducer'

class Dispatch {
  getProject(id: string): DispatcherResponse {
    return async (dispatch) => {
      const project = await api.getProject(id)
      if (project) {
        dispatch(actions.set(project))
      }
    }
  }

  createProject(params: { name: string }): DispatcherResponse {
    return async (dispatch) => {
      const app = await api.createProject(params)
      dispatch(SpaceDispatcher.getProjects())
    }
  }

  getApps(project_id: string): DispatcherResponse {
    return async (dispatch) => {
      const apps = await api.getApps(project_id)
      dispatch(actions.setApps({ id: project_id, list: apps }))
    }
  }

  /// ????
  getAppClients(app_id: string): DispatcherResponse {
    return async (dispatch) => {
      const list = await adminApi.getAppClients(app_id)
      dispatch(actions.setAppClients({ app_id, list }))
    }
  }

  getAppAccessList(app_id: string): DispatcherResponse {
    return async (dispatch) => {
      const list = await adminApi.getAppAccessList(app_id)
      dispatch(actions.setAppAccessList({ app_id, list }))
    }
  }

  createClient(app_id: string, params: { name: string }): DispatcherResponse {
    return async (dispatch) => {
      await adminApi.createAppClient(app_id, params)
      dispatch(this.getAppClients(app_id))
    }
  }

  addAccess(app_id: string, params: { name: string; public_key: string }): DispatcherResponse {
    return async (dispatch) => {
      await adminApi.createAppAccess(app_id, params)
      dispatch(this.getAppAccessList(app_id))
    }
  }

  getAuthProviders(app_id: string) {
    return async (dispatch) => {
      const list = await api.getAuthProviders(app_id)
      dispatch(
        actions.setAuthProviders({
          app_id,
          list,
        }),
      )
    }
  }

  enableFirebaseApp(app_id: string) {
    return async (dispatch) => {
      await apiFirebase.enableFirebaseApp(app_id)
      await dispatch(this.getAuthProviders(app_id))
    }
  }

  disableFirebaseApp(app_id: string) {
    return async (dispatch) => {
      await apiFirebase.disableFirebaseApp(app_id)
      await dispatch(this.getAuthProviders(app_id))
    }
  }
}

const ProjectDispatcher = new Dispatch()
export default ProjectDispatcher
